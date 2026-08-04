import { authFetch, BASE_URL } from "./api";

export type CurriculumPayload = {
  experiencias: { cargo: string; empresa: string; descricao: string; inicioData: string; fimData?: string; empregoAtual?: boolean }[];
  formacoes: { nivelFormacao: string; grauFormacao: string; curso: string; nomeInstituicao: string; status: string; inicioData: string; fimData?: string }[];
  certificados: { nomeInstituicao: string; descricao: string; certificate_name: string }[];
  idiomas: { idioma: string; nivel: string }[];
  diferenciais: { descricao: string }[];
}

const CURRICULUM_URL = `${BASE_URL}/curriculum`;

export async function getCurriculum() {
  const response = await authFetch(`${CURRICULUM_URL}/find/me`, {
    method: "GET",
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}

export async function createCurriculum(data: CurriculumPayload) {
  const response = await authFetch(`${CURRICULUM_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}

export async function updateCurriculum(data: CurriculumPayload) {
  const response = await authFetch(`${CURRICULUM_URL}/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}

export async function deleteCurriculum(id: number) {
  const response = await authFetch(`${CURRICULUM_URL}/delete/${id}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}

export async function importCurriculumFromPdf(file: File): Promise<CurriculumPayload> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await authFetch(`${CURRICULUM_URL}/import-pdf`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na importação");
  }
  return response.json();
}
