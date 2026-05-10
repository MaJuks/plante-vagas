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
      dateNasc: string;
      cpf: string;
      phone: string;
      gender: string;
      disablePerson: string;
      createdAt: string;
      Address: {
        postalCode: string;
        street: string;
        number: string;
        district: string;
        complement?: string;
        city: string;
        state?: string;
        country?: string;
      } | null;
    };
  };
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/users/profile", {
        method: "GET",
        headers: { authorization: `bearer ${token}` },
      });

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [userData, setUserData] = useState({
    user: {
      id: "",
      email: "",
      password: "",
      name: "",
      dateNasc: "",
      cpf: "",
      phone: "",
      gender: "",
      disablePerson: "",
      createdAt: "",
      Address: null as {
        postalCode: string;
        street: string;
        number: string;
        district: string;
        complement?: string;
        city: string;
        state?: string;
        country?: string;
      } | null,
    },
  });

  return (
    <UserContext.Provider value={{ UserData: userData, refreshUser: fetchUserData }}>
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
