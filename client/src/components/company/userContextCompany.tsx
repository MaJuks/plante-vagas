import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { authFetch, BASE_URL, clearSession } from "../../services/api";

interface CompanyAddress {
  country?: string;
  state?: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  postalCode: string;
}

interface UserContextType {
  UserData: {
    user: {
      id: string;
      email: string;
      password: string;
      name: string;
      openingDate: string;
      cnpj: string;
      phone: string;
      socialReason: string;
      fantasyName: string;
      description: string;
      logoUrl?: string | null;
      bannerUrl?: string | null;
      facebookUrl?: string | null;
      instagramUrl?: string | null;
      linkedinUrl?: string | null;
      websiteUrl?: string | null;
      createdAt: string;
      Address?: CompanyAddress | null;
    };
  };
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProviderCompany = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState({
    user: {
      id: "",
      email: "",
      password: "",
      cnpj: "",
      openingDate: "",
      name: "",
      fantasyName: "",
      socialReason: "",
      phone: "",
      createdAt: "",
      description: "",
      logoUrl: null as string | null,
      bannerUrl: null as string | null,
      facebookUrl: null as string | null,
      instagramUrl: null as string | null,
      linkedinUrl: null as string | null,
      websiteUrl: null as string | null,
      Address: null as CompanyAddress | null,
    },
  });

  const refreshUser = useCallback(async () => {
    try {
      const response = await authFetch(
        `${BASE_URL}/company/profile-comapany`,
        { method: "GET" }
      );

      if (!response.ok) {
        if (response.status === 401) {
          clearSession();
          window.location.href = "/login";
        }
        return;
      }

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  return (
    <UserContext.Provider value={{ UserData: userData, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Precisa estar em um UserProvider");
  }
  return context;
};

export default UserContext;
