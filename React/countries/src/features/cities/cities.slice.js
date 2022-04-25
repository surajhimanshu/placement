import { createSlice } from "@reduxjs/toolkit";
import { getAllCities } from "./cities.api";

const initialState = {
    isLoading:true,
    error:false,
    cities :[]
}
export const citiesSlice = createSlice({
    name:'cities',
    initialState,
    reducers :{},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCities.pending , (state,action) => {
                state.isLoading = true;
                state.cities = [];
                state.error = false;
            })
            .addCase(getAllCities.fulfilled , (state,action) => {
                state.cities = action.payload;
                state.isLoading = false;
                state.error = false;
            })
            .addCase(getAllCities.rejected , (state,action) => {
                state.cities = action.payload;
                state.isLoading = false;
                state.error = true;
            })
    }
})

export default citiesSlice.reducer;