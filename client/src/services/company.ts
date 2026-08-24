import { authFetch, BASE_URL } from "./api";

const COMPANY_URL = `${BASE_URL}/company`;

export interface CompanyAddress {
  country?: string;
  state?: string;
  city: string;
  district: string;
  street: string;
  number: string;
  complement?: string;
  postalCode: string;
}

export interface Company {
  id: number;
  email: string;
  name: string;
  openingDate: string;
  cnpj: string;
  description: string;
  socialReason: string;
  fantasyName: string;
  phone: string;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  websiteUrl?: string | null;
  createdAt: string;
  Address?: CompanyAddress | null;
}

export interface PublicCompany {
  id: number;
  name: string;
  fantasyName: string;
  description: string;
  openingDate: string;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  facebookUrl?: string | null;
  instagramUrl?: string | null;
  linkedinUrl?: string | null;
  websiteUrl?: string | null;
  Address?: { city: string; state: string } | null;
}

export async function getPublicCompany(id: number): Promise<PublicCompany> {
  const response = await fetch(`${COMPANY_URL}/${id}`);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao buscar empresa");
  }
  return response.json();
}

export interface UpdateProfilePayload {
  description?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  websiteUrl?: string;
}

export async function updateCompanyProfile(data: UpdateProfilePayload): Promise<Company> {
  const response = await authFetch(`${COMPANY_URL}/update-profile`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao atualizar perfil");
  }
  return response.json();
}

export interface UpdateCadastroPayload {
  name?: string;
  fantasyName?: string;
  socialReason?: string;
  phone?: string;
  openingDate?: string;
  address?: CompanyAddress;
}

export async function updateCompanyCadastro(data: UpdateCadastroPayload): Promise<Company> {
  const response = await authFetch(`${COMPANY_URL}/update-cadastro`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao atualizar cadastro");
  }
  return response.json();
}

export async function uploadCompanyLogo(file: File): Promise<Company> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await authFetch(`${COMPANY_URL}/logo`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao enviar logo");
  }
  return response.json();
}

export async function uploadCompanyBanner(file: File): Promise<Company> {
  const formData = new FormData();
  formData.append("file", file);
  const response = await authFetch(`${COMPANY_URL}/banner`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao enviar banner");
  }
  return response.json();
}
