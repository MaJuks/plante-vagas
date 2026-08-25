import { createContext, useContext, useState, ReactNode } from "react";

export interface EtapaData {
  nome: string;
  descricao: string;
}

interface VagaCreateData {
  nome: string;
  cargo: string;
  beneficios: string[];
  requisitos: string[];
  salario: string;
  descricao: string;
  etapas: EtapaData[];
}

interface VagaCreateContextType {
  data: VagaCreateData;
  setData: (data: Partial<VagaCreateData>) => void;
}

const VagaCreateContext = createContext<VagaCreateContextType | null>(null);

export function VagaCreateProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<VagaCreateData>({
    nome: "",
    cargo: "",
    beneficios: [],
    requisitos: [],
    salario: "",
    descricao: "",
    etapas: [],
  });

  const setData = (partial: Partial<VagaCreateData>) => {
    setDataState((prev) => ({ ...prev, ...partial }));
  };

  return (
    <VagaCreateContext.Provider value={{ data, setData }}>
      {children}
    </VagaCreateContext.Provider>
  );
}

export function useVagaCreate() {
  const ctx = useContext(VagaCreateContext);
  if (!ctx) throw new Error("useVagaCreate must be used within VagaCreateProvider");
  return ctx;
}
