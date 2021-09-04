const API_URL =
  'https://frontend-intern-challenge-api.iurykrieger.now.sh/products';

async function fetcher<DataType>(url: string = API_URL): Promise<DataType> {
  const response = await fetch(url);

  return response.json();
}

export { fetcher };
