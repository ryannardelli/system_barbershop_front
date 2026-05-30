const API_URL = "/api";

export async function syncUser(token: string) {
  const response = await fetch(
    `${API_URL}/auth/sync`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao sincronizar");
  }

  return response.json();
}

export async function getMe(token: string) {
  const response = await fetch(
    `${API_URL}/auth/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
  }

  return response.json();
}
