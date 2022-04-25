import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "./cities.api";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import IndividualCities from "./IndividualCities";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Cities = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [sort, setSort] = useState(0);
  const { cities, isLoading, error } = useSelector((state) => state.cities);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);
  const handleSort = (i) => {
    // console.log(i);
    setSort(i);
  };

  if (isLoading) {
    return < CircularProgress style={{  margin:"auto" ,marginTop:"100px"}} />;
  } else if (error) {
    return <h1>Error in request</h1>;
  } else {
    return (
      
      <>
        <div>
          <Link to="/add-country">Click here to add country</Link>
          <br />
          <Link to="/add-city">Click here to add new city</Link>
        </div>
        <br />

        <TextField
          id="outlined-basic"
          placeholder="search Country"
          variant="outlined"
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />
        <br />
        {/* <Button onClick={handleSubmit} variant="contained">Submit</Button> */}
        <br />
        {[
          "original",
          "sort in asc by population",
          "sort in desc by population",
        ].map((val, i) => (
          <div key={i}>
            {i > -1 && (
              <Button onClick={() => handleSort(i)} variant="contained">
                {val}
              </Button>
            )}
            <br />
            <br />
          </div>
        ))}
        <table style={{width:"50%",margin:"auto"}}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Country</th>
              <th>City</th>
              <th>Population</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cities
              ?.filter((val) => {
                if (country === "") {
                  return true;
                }
                return val.country
                  .toLowerCase()
                  .includes(country.toLowerCase());
              })
              .sort((a, b) => {
                a = Number(a.population.split(",").join(""));
                b = Number(b.population.split(",").join(""));
                if (sort === 1) {
                  return a - b;
                }
                if (sort === 2) {
                  return b - a;
                }
                return 0;
              })
              .map((city) => (
                <IndividualCities city={city} key={city.id} />
              ))}
          </tbody>
        </table>
      </>
    );
  }
};

export default Cities;
