import React from "react";
import { Row, Col} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
class Demo extends React.Component {
  constructor(props) {
    console.log("Demo constructing");
    super(props);
  }
  render() {
    return (
      <div id="arch" className="text-white text-center font-weight-bold">
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
