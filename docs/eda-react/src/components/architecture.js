import React from "react";
import { Navbar } from "react-bootstrap";
import EventDrivenArch from "../EventDrivenArch.png";
import Image from "react-bootstrap/Image";
function Archictecture() {
  var imageStylesCert = {
    width: "70%",
    height: "70%"
  };
  return (
    <div id="eda-architecture" className="text-white text-center font-weight-bold">
      <Navbar bg="secondary" expand="lg">
        Architecture
      </Navbar>
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        <Image
          src={EventDrivenArch}
          alt="EDA"
          fluid
          rounded
          style={imageStylesCert}
        />
      </div>
    </div>
  );
}
export default Archictecture;
