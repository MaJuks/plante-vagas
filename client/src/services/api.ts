export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

export type Session = {
  accessToken: string;
  userType?: string;
  userId?: string | number;
};

export function getToken() {
  return localStorage.getItem("token");
}

export function setSession(session: Session) {
  localStorage.setItem("token", session.accessToken);
  if (session.userType !== undefined) {
    localStorage.setItem("userType", session.userType);
  }
  if (session.userId !== undefined) {
    localStorage.setItem("userId", String(session.userId));
  }
}

export function clearSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("userType");
  localStorage.removeItem("userId");
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
 * fetch() com sessão: injeta o access token. Se a resposta vier 401
 * (token expirado ou inválido), limpa a sessão e manda o usuário pro /login.
 */
export async function authFetch(input: string, options: RequestInit = {}): Promise<Response> {
  const response = await fetch(input, withAuthHeader(options, getToken()));

  if (response.status === 401) {
    clearSession();
    if (typeof window !== "undefined" && window.location.pathname !== "/login") {
      window.location.href = "/login";
    }
  }

  return response;
}
