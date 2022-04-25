import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../countries/countries.api";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddCity = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isSubmitted,setIsSubmitted] = useState();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    //  console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        addCity(formData)
        //console.log(JSON.stringify(formData));
        
  }

  const addCity = async (payload) => {
      try{
        const response = await axios.post(`https://json-apisuraj.herokuapp.com/cities`,payload);
        setIsSubmitted(true);
        navigate('/')
      }catch(e){
        setIsSubmitted(true);
        alert("not sum")
      }finally{
        setIsSubmitted(false);
      }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            required
            value={formData.city || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <label>Population</label>
        <input
          type="number"
          name="population"
          value={formData.population ||""}
          onChange={handleChange}
          required
        />
        <br />
        <div>
          <label>Choose country</label>
          <select name="country" value={formData.countries} required onChange={handleChange}>
            <option value=""></option>
            {countries.map((val) => (
              <option key={val} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
        <input type="submit"/>
      </form>
    </>
  );
};

export default AddCity;
