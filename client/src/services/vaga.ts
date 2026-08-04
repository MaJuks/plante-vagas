import { authFetch, BASE_URL } from "./api";

const VAGA_URL = `${BASE_URL}/vaga`;

export interface VagaPayload {
  nome: string;
  cargo: string;
  descricao: string;
  salario?: number;
  beneficios: { nome: string }[];
  etapas: { nome: string; descricao: string }[];
}

export interface EtapaProcessoSeletivo {
  id: number;
  nome: string;
  descricao: string;
  status: string;
}

export interface Vaga {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  salario?: number;
  beneficios: { id: number; nome: string }[];
  etapas: EtapaProcessoSeletivo[];
  empresaId: number;
  createdAt: string;
  updatedAt: string;
}

export async function createVaga(data: VagaPayload): Promise<Vaga> {
  const response = await authFetch(`${VAGA_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao criar vaga");
  }
  return response.json();
}

export async function getVagaById(id: number): Promise<Vaga> {
  const response = await authFetch(`${VAGA_URL}/find/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao buscar vaga");
  }
  return response.json();
}

export async function getVagasByEmpresa(): Promise<Vaga[]> {
  const response = await authFetch(`${VAGA_URL}/find/empresa`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao buscar vagas");
  }
  return response.json();
}

export async function updateVaga(id: number, data: Partial<VagaPayload>): Promise<Vaga> {
  const response = await authFetch(`${VAGA_URL}/update/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao atualizar vaga");
  }
  return response.json();
}

export async function updateEtapaService(etapaId: number, data: { nome: string; descricao: string }): Promise<EtapaProcessoSeletivo> {
  const response = await authFetch(`${VAGA_URL}/etapa/${etapaId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao editar etapa");
  }
  return response.json();
}

export async function deleteEtapa(etapaId: number): Promise<void> {
  const response = await authFetch(`${VAGA_URL}/etapa/${etapaId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao excluir etapa");
  }
}

export async function addEtapa(vagaId: number, etapa: { nome: string; descricao: string }): Promise<EtapaProcessoSeletivo> {
  const response = await authFetch(`${VAGA_URL}/${vagaId}/etapa`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(etapa),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao adicionar etapa");
  }
  return response.json();
}

export async function deleteVaga(id: number): Promise<void> {
  const response = await authFetch(`${VAGA_URL}/delete/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao excluir vaga");
  }
}
