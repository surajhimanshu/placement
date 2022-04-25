import { createSlice } from "@reduxjs/toolkit";
import { getCountries } from "./countries.api";

const initialState = {
    countries: [],
  }

export const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducer:{
        //
    },
    extraReducers:(builder) => {
        builder
            .addCase(getCountries.fulfilled,(state,action) => {
                state.countries = action.payload;
            })
    }
})

export default countriesSlice.reducer


