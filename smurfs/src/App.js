import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchData } from "./actions/index";
import AddData from "./components/AddData";
function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);
  console.log("test", props.data.smurf);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stocks</h1>

        {/* <p>{name}</p> */}
        <AddData />
        {props.data.smurf.map((data) => (
          <div>
            <h1>{data.name}</h1>
            <p>{data.height}</p>
            <p>{data.age}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
