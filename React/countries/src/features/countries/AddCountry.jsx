import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddCountry = () => {
  const [country, setCountry] = useState("");
  const [isSubmitted,setIsSubmitted] = useState();

  const handleSubmit = async () =>{
    try{
      await axios.post(`https://json-apisuraj.herokuapp.com/cities`,country);
      setIsSubmitted(true);
    }catch(e){
      setIsSubmitted(true);
      alert("not sum")
    }finally{
      setIsSubmitted(false);
    }
}
  
  return (
    <div>
      <br />
      <br />
      <h1 style={{color:"red"}}>This page is not working</h1>
      <label>Write name of country</label>
      <br />
      <br />
      <br />
      <TextField id="outlined-basic" variant="outlined" onChange={(e) => setCountry(e.target.value)} />
      <br />
      <br />
      <br />

      <Button onClick={handleSubmit} variant="contained">Submit</Button>
    </div>
  );
};

export default AddCountry;
