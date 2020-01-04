import React from "react";
import { Row, Col} from "react-bootstrap";
import GithubLogo from "../GitHub-Mark-Light-120px-plus.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import BrandLogo from "../dp-logo.png";
import Image from "react-bootstrap/Image";
class Demo extends React.Component {
  constructor(props) {
    console.log("Demo constructing");
    super(props);
  }
  render() {
    return (
      <div id="arch" className="text-white text-center">
        <Navbar bg="secondary" expand="lg">
        Demo -coming soon!
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
export default Demo;
