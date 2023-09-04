import React from "react";

const Jumbotron = ({ title, subtitle = "bienvenido a react ecommerce" }) => {
  return (
    <>
      <div
        className="jumbotron container-fluid jumbotron"
        style={{ marginTop: "-8px", height: "200px" }}
      >
        <div className="row">
          <div className="col text-center p-4">
            <h1>{title}</h1>
            <p className="lead">{subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
