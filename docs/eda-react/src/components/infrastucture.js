import React from "react";
import { Row, Col} from "react-bootstrap";
import GithubLogo from "../GitHub-Mark-Light-120px-plus.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import Image from "react-bootstrap/Image";
class Infrastructure extends React.Component {
  constructor(props) {
    console.log("Infrastructure constructing");
    super(props);
  }
  render() {
    return (
      <div id="infra" className="text-white text-center">
        <Navbar bg="secondary" expand="lg">
        Infrastructure As Code-coming soon!
      </Navbar>
        <Row>
          <Col sm>
            <div className="text-center">
             
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Infrastructure;
