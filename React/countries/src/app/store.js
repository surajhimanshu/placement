import { configureStore } from '@reduxjs/toolkit';
import  citiesReducer  from '../features/cities/cities.slice';
import  countriesReducer  from '../features/countries/countries.slice';

export const store = configureStore({
  reducer: {
    countries:countriesReducer,
    cities:citiesReducer
  },
});
