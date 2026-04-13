export type CurriculumPayload = {
  experiencias: { cargo: string; empresa: string; descricao: string; inicioData: string; fimData?: string; empregoAtual?: boolean }[];
  formacoes: { nivelFormacao: string; grauFormacao: string; curso: string; nomeInstituicao: string; status: string; inicioData: string; fimData?: string }[];
  certificados: { nomeInstituicao: string; descricao: string; certificate_name: string }[];
  idiomas: { idioma: string; nivel: string }[];
  diferenciais: { descricao: string }[];
}

const getToken = () => localStorage.getItem("token");
const BASE_URL = "http://localhost:3000/curriculum";

export async function getCurriculum() {
  const response = await fetch(`${BASE_URL}/find/me`, {
    method: "GET",
    headers: { authorization: `bearer ${getToken()}` },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}

export async function createCurriculum(data: CurriculumPayload) {
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${getToken()}`,
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
  const response = await fetch(`${BASE_URL}/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${getToken()}`,
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
  const response = await fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
    headers: { authorization: `bearer ${getToken()}` },
  })
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro na requisição");
  }
  return response.json();
}
