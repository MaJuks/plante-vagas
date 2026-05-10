const getToken = () => localStorage.getItem("token");
const BASE_URL = "http://localhost:3000/users";

export async function updateUser(data: {
  phone?: string;
  disablePerson?: string;
  currentPassword?: string;
  newPassword?: string;
  address?: {
    postalCode: string;
    street: string;
    number: string;
    district: string;
    complement?: string;
    city: string;
    state?: string;
    country?: string;
  };
}) {
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
    throw new Error(error.message || "Erro ao atualizar dados");
  }
  return response.json();
}

export async function deleteUser() {
  const userId = localStorage.getItem("userId");
  const response = await fetch(`${BASE_URL}/delete/${userId}`, {
    method: "DELETE",
    headers: { authorization: `bearer ${getToken()}` },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Erro ao deletar conta");
  }
  return response.json();
}
