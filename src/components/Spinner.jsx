import React from "react";

function Spinner() {
  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-center"
        style={{ width: "5rem", height: "5rem" }}
      ></div>
    </div>
  );
}

export default Spinner;
