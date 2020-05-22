import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

const AddColorsForm = () => {
  const [newColor, setNewColor] = useState({
    colorName: "",
    hexCode: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewColor({
      ...newColor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/colors", newColor).then((res) => {
      console.log("this is new color res", res);
    });
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="newColorForm">
        <h3>Add Colors!</h3>
        <label>Color Name</label>{" "}
        <input
          type="text"
          name="colorName"
          placeholder="Color Name"
          onChange={handleChange}
          value={newColor.colorName}
        />
        <label>Hex Code</label>
        <input
          type="text"
          name="hexCode"
          placeholder="Hex Code"
          onChange={handleChange}
          value={newColor.hexCode}
        />
        <button type="submit" onClick={refreshPage}>
          Add Color!
        </button>
      </form>
    </div>
  );
};
export default AddColorsForm;
