import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCities = createAsyncThunk(
  "cities/allCities",
  async () => {
    const response = await axios.get(`https://json-apisuraj.herokuapp.com/cities`);
    return response.data
  }
);

