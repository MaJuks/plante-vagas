import { createContext, useState, ReactNode, useContext } from "react";

interface RegisterContextType {
  formData: {
    email: string;
    password: string;
    name: string;
    dateNasc: string;
    cpf: string;
    phone: string;
    gender: string;
    disablePerson: string;
  };
  updateFormData: (newdata: any) => void;
}

const RegisterContext = createContext<RegisterContextType>(
  {} as RegisterContextType
);

export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    dateNasc: "",
    cpf: "",
    phone: "",
    gender: "",
    disablePerson: "",
  });

  const updateFormData = (newdata: any) => {
    setFormData((prev) => ({ ...prev, ...newdata }));
  };

  return (
    <RegisterContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RegisterContext.Provider>
  );
};
export const useRegister = () => useContext(RegisterContext);
