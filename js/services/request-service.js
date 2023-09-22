import RequestException from "./exceptions/request-exceptions.js";

export async function getJson(url) {
  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  } catch (e) {
    throw new RequestException("Erro ao realizar a pesquisa!");
  }
}
