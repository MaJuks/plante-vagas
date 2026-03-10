import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
        const token = localStorage.getItem("token");
        const response = await fetch(
          "http://localhost:3000/company/profile-comapany",
          {
            method: "GET",
            headers: { authorization: `bearer ${token}` },
          }
        );

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
