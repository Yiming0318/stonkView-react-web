import axios from "axios";

// const REVIEW_API = 'http://localhost:4000/reviews';
const REVIEW_API = 'https://stonk-view-server.onrender.com/reviews';
const api = axios.create({
  withCredentials: true,
});

export const createReview = async (review) => {
  const response = await api.post(REVIEW_API, review);
  return response.data;
}

export const findReviewByStock = async (searchStockCode) => {
  const response = await api.get(`${REVIEW_API}/stocks/${searchStockCode}/reviews`);
  console.log(response.data);
  return response.data;
}

export const findReviewByAuthor = async (author) => {
  const response = await api.get(`${REVIEW_API}/users/${author}/reviews`);
  console.log(response.data);
  return response.data;
}