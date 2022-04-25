import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllCities } from "./cities.api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const IndividualCities = ({ city }) => {
  const [open, setOpen] = React.useState(false);
  const [pop, setPop] = React.useState(city.population);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const handlePatchSubmit = async (id, population) => {
    try {
      await axios.patch(`https://json-apisuraj.herokuapp.com/cities/${id}`, {
        population,
      });
      setOpen(false);
      dispatch(getAllCities());
    } catch (e) {
      //
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://json-apisuraj.herokuapp.com/cities/${id}`);
      dispatch(getAllCities());
    } catch (e) {
      //
    }
  };

  return (
    <>
      <tr>
        <td>{city.id}</td>
        <td>{city.country}</td>
        <td>{city.city}</td>
        <td>{city.population}</td>
        <td>
          <Button onClick={handleOpen}>Edit</Button>
        </td>
        <td>
          <Button onClick={() => handleDelete(city.id)}>Delete</Button>
        </td>
      </tr>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label>
            Update <h1 style={{ display: "inline" }}>{city.city}</h1>'s
            population
          </label>
          <br />
          <br />
          <TextField
            id="outlined-basic"
            placeholder="search Country"
            variant="outlined"
            value={pop}
            onChange={(e) => setPop(e.target.value)}
          />
          <br />
          <br />

          <Button
            onClick={() => handlePatchSubmit(city.id, pop)}
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default IndividualCities;
