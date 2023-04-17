import axios from "axios";

const SEARCH_URL = 'https://api.stockdata.org/v1/data/quote?api_token=1wLFHSdzSO9prw8eCHcTgOuB3AHYcNpAGq6JnVqE&symbols=';

export const findStockBySymbol = async (symbol) => {
  const response = await axios.get(`${SEARCH_URL}${symbol}`);
  return response.data.data;
}