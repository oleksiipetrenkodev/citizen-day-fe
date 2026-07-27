const apiBaseUrl = process.env.BACKEND_URL ?? "http://localhost:3001";

export async function apiFetch(
  path: string,
  options?: RequestInit,
): Promise<Response> {
  const url = new URL(path, `${apiBaseUrl.replace(/\/$/, "")}/`);
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response;
}
