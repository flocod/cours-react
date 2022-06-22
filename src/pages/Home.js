import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Homes = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Welcomes to my SPA APP</h1>
      <Countries />
    </div>
  );
};

export default Homes;
