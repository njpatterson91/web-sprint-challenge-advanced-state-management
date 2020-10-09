import React from "react";

import { addData } from "../actions/index";
import { connect } from "react-redux";

const AddData = (props) => {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    height: "",
  });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addData(data);
    console.log(data);
    setData({ name: "", age: "", height: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={data.name}
        onChange={handleChanges}
      ></input>
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={data.age}
        onChange={handleChanges}
      ></input>
      <input
        name="height"
        type="number"
        placeholder="Height"
        value={data.height}
        onChange={handleChanges}
      ></input>
      <button>Add Smurf</button>
    </form>
  );
};

export default connect(null, { addData })(AddData);
