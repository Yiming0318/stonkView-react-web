import axios from "axios";

// const USERS_API = "http://localhost:4000/users";
const USERS_API = "https://stonk-view-server.onrender.com/users";
const api = axios.create({
  withCredentials: true,
});

export const userBuyIn = async (userId, stockId) => {
  const response = await api.post(`${USERS_API}/${userId}/buyin/${stockId}`);
  return response.data;
}

export const findBuyInByUserId = async (userId) => {
  const response = await api.get(`${USERS_API}/${userId}/buyin`);
  console.log(response.data);
  return response.data;
}
