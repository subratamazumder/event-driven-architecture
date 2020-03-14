import React from "react";
import { Row, Col} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
class Infrastructure extends React.Component {
  constructor(props) {
    console.log("Infrastructure constructing");
    super(props);
  }
  render() {
    return (
      <div id="infra" className="text-white text-center font-weight-bold">
        <Navbar bg="secondary" expand="lg">
        Infrastructure As Code (IaC)-coming soon!
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
