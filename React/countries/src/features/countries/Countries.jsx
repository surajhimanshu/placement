import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountries } from './countries.api';


const Countries = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {countries} = useSelector(state => state.countries)

  useEffect(()=> {
   dispatch(getCountries());
  },[dispatch])
  return (
    <div>Countries</div>
  )
}

export default Countries