import { createContext, useState, ReactNode, useContext } from "react";

interface RegisterContextType {
  formData: {
    email: string;
    password: string;
    name: string;
    cnpj: string;
    description: string;
    socialReason: string;
    fantasyName: string;
    phone: string;
    openingDate: string;
  };
  updateFormData: (newdata: any) => void;
}

const RegisterContext = createContext<RegisterContextType>(
  {} as RegisterContextType
);

export const RegisterProviderCompany = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    cnpj: "",
    description: "",
    socialReason: "",
    fantasyName: "",
    phone: "",
    openingDate: "",
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
