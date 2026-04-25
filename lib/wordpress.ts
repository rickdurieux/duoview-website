const API_URL = process.env.WORDPRESS_API_URL;

export async function fetchAPI(query: string, variables = {}) {
  if (!API_URL) {
    throw new Error("WORDPRESS_API_URL ontbreekt in .env.local");
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60,
    },
  });

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Fout bij ophalen van WordPress data");
  }

  return json.data;
}
