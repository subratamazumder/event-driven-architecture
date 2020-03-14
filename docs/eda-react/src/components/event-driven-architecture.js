import React from "react";
import { Row, Col} from "react-bootstrap";
import GithubLogo from "../GitHub-Mark-Light-120px-plus.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import Image from "react-bootstrap/Image";
import Archictecture from "../components/architecture"
import Infrastructure from "../components/infrastucture"
import Demo from "../components/demo"
import Description from "../components/eda-description"
class EDA extends React.Component {
  constructor(props) {
    console.log("EDA constructing");
    super(props);
  }
  render() {
    return (
      <div id="eda">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://subrata.dev/" className="text-white font-weight-bold">
            <img
              alt=""
              src={BrandLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Serverless Event Driven Architecture
          </Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            
          </Nav>
          <Nav.Link href="https://github.com/subratamazumder/event-driven-architecture">
          <Image
            src={GithubLogo}
            alt="Github"
            fluid
            rounded
            width="30"
            height="30"
          />
        </Nav.Link>
        </Navbar>
        <Row>
          <Col sm>
            <Description></Description>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Archictecture></Archictecture>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Infrastructure></Infrastructure>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Demo></Demo>
          </Col>
        </Row>
      </div>
    );
  }
}
export default EDA;
