import React from "react";
import { connect } from "react-redux";

const DataMapped = (props) => {
  return (
    <div>
      {/* <p>{props.data["c"][2] === undefined ? "hello" : props.data["c"][2]}</p> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, {})(DataMapped);
