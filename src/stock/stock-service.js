import axios from "axios";

// Notice: 100 call per day, 5pm refresh.
const SEARCH_URL = 'https://api.stockdata.org/v1/data/quote?api_token=1wLFHSdzSO9prw8eCHcTgOuB3AHYcNpAGq6JnVqE&symbols=';

export const findStockBySymbol = async (symbol) => {
  const response = await axios.get(`${SEARCH_URL}${symbol}`);
  return response.data.data;
}