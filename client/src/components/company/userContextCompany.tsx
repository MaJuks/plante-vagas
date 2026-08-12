import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { authFetch, BASE_URL, clearSession } from "../../services/api";

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
      createdAt: string;
    };
  };
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProviderCompany = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const fetchUserData = async () => {
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
    };

    fetchUserData();
  }, []);

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
    },
  });

  return (
    <UserContext.Provider value={{ UserData: userData }}>
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
