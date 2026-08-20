export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type Session = {
  accessToken: string;
  refreshToken: string;
  userType?: string;
  userId?: string | number;
};

export function getToken() {
  return localStorage.getItem("token");
}

function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}

export function setSession(session: Session) {
  localStorage.setItem("token", session.accessToken);
  localStorage.setItem("refreshToken", session.refreshToken);
  if (session.userType !== undefined) {
    localStorage.setItem("userType", session.userType);
  }
  if (session.userId !== undefined) {
    localStorage.setItem("userId", String(session.userId));
  }
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userType");
  localStorage.removeItem("userId");
}

let refreshPromise: Promise<string | null> | null = null;

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return null;

  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const res = await fetch(`${BASE_URL}/auth/refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refreshToken }),
        });

        if (!res.ok) return null;

        const data = await res.json();
        setSession(data);
        return data.accessToken as string;
      } catch {
        return null;
      } finally {
        refreshPromise = null;
      }
    })();
  }

  return refreshPromise;
}

function withAuthHeader(options: RequestInit, token: string | null): RequestInit {
  return {
    ...options,
    headers: {
      ...(options.headers as Record<string, string> | undefined),
      ...(token ? { authorization: `bearer ${token}` } : {}),
    },
  };
}

/**
 * fetch() com sessão: injeta o access token, e se a resposta vier 401,
 * tenta renovar via /auth/refresh e repete a chamada original uma vez.
 * Se o refresh falhar, limpa a sessão e manda o usuário pro /login.
 */
export async function authFetch(input: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(input, withAuthHeader(options, getToken()));

  if (response.status !== 401) return response;

  const newToken = await refreshAccessToken();

  if (!newToken) {
    clearSession();
    if (typeof window !== "undefined" && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
    return response;
  }

  return fetch(input, withAuthHeader(options, newToken));
}
