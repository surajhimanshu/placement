import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/allcountries",
  async () => {
    const response = await axios.get(`https://json-apisuraj.herokuapp.com/countries`);
    return response.data
  }
);
export const postCountry = createAsyncThunk(
  "country/singleCountry",
  async () => {
    const response = await axios.get(`https://json-apisuraj.herokuapp.com/countries`);
    return response.data
  }
);
