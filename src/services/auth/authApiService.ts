const API_URL = "";

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
