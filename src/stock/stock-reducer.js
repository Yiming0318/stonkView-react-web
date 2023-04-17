import {createSlice} from "@reduxjs/toolkit";
import {findStockBySymbolThunk} from "./stock-thunks";

const initialState = {
  singlestock: [],
  loading: false
}

const stockReducer = createSlice({
  name: 'singlestock',
  initialState,
  extraReducers: {
    [findStockBySymbolThunk.fulfilled]: (state, action) => {
      state.singlestock = action.payload
    }
  },
})

export default stockReducer.reducer;