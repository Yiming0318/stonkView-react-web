import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  createReview,
  findReviewByAuthor,
  findReviewByStock
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review) => createReview(review)
)

export const findReivewByStockThunk = createAsyncThunk(
    'findReivewByStockThunk',
    async (searchStockCode) => findReviewByStock(searchStockCode)
)

export const findReviewByAuthorThunk = createAsyncThunk(
    'findReviewByAuthorThunk',
    async (author) => findReviewByAuthor(author)
)