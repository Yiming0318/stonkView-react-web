import {createAsyncThunk} from "@reduxjs/toolkit";
import {findStockBySymbol} from "./stock-service";

export const findStockBySymbolThunk = createAsyncThunk(
    'findStockBySymbol',
    (symbol) => findStockBySymbol(symbol)
)