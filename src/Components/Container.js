import React from "react";
import AppBar from "./AppBar";
// import './Container.scss';

const Container = ({ children }) => (
  <div className="Container">
    <AppBar />
    <hr />
    {children}
  </div>
);

export default Container;
