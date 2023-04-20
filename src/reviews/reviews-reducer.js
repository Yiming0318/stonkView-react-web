import {createSlice} from "@reduxjs/toolkit";
import {
  createReviewThunk,
  findReivewByStockThunk,
  findReviewByAuthorThunk
} from "./review-thunks";

const reviewsReducer = createSlice({
  name: 'reviews',
  initialState: {
    reviews: []
  },
  extraReducers:{
    [createReviewThunk.fulfilled]: (state, action) => {
      state.reviews.push(action.payload)
    },
    [findReivewByStockThunk.fulfilled]: (state, action) => {
      state.reviews = action.payload
    },
    [findReviewByAuthorThunk.fulfilled]: (state, action) => {
      state.reviews = action.payload
    },
  }
})

export default reviewsReducer.reducer