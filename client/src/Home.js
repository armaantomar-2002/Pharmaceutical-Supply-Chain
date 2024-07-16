import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };
  return (
    <div className="container">
      <div className="header">
        <h1 id = "myH1">Pharmaceutical Supply Chain Flow</h1>
      </div>
      <br />
      <div id="keys">
        <div className="register">
        
          <h5>
            Step 1: Register Raw Material Suppliers ,Manufacturers,
            Distributors and Retailers
          </h5>
        
          <button
            onClick={redirect_to_roles}
            className="mybtn1"
          >
            Register
          </button>
        </div>
        
        <div className="ordermedicines">
          <h5>Step 2: Owner should order medicines</h5>
          <button
            onClick={redirect_to_addmed}
            className="mybtn"
          >
            Order Medicines
          </button>
        </div>
        
        <div className="controlchain">
          <h5>Step 3 :Control Supply Chain</h5>
          <button
            onClick={redirect_to_supply}
            className="mybtn"
          >
            Control Supply Chain
          </button>
        </div>
        
        <div className="track">
          <h5>
            Step 4: Track the medicines
          </h5>
          <button
            onClick={redirect_to_track}
            className="mybtn"
          >
            Track Medicines
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
