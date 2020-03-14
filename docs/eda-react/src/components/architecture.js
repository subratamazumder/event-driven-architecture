import React from "react";
import { Navbar } from "react-bootstrap";
import EventDrivenArch from "../EventDrivenArch.png";
import EventDrivenConcept from "../EDAConcept.svg";
import Image from "react-bootstrap/Image";
function Archictecture() {
  var imageStylesCert = {
    width: "70%",
    height: "70%"
  };
  return (
    <div id="eda-architecture">
      <Navbar
        bg="secondary"
        expand="lg"
        className="text-white text-center font-weight-bold"
      >
        Architecture
      </Navbar>
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        <Image
          src={EventDrivenConcept}
          alt="EDA"
          fluid
          rounded
          style={imageStylesCert}
        />
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        Conceptual view of an EDA
      </div>
      <br></br>
      <br></br>
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        <Image
          src={EventDrivenArch}
          alt="EDA"
          fluid
          rounded
          style={imageStylesCert}
        />
      </div>
      <div className="col-md-12 col-sm-12 col-xs-12 text-center">
        Implementation view of EDA using AWS Services
      </div>
    </div>
  );
}
export default Archictecture;
