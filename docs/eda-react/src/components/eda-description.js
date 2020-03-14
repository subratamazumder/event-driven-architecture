import React from "react";
import { Navbar } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
function Description() {
  return (
    <div id="eda-architecture">
      <Navbar
        bg="secondary"
        expand="lg"
        className="text-white text-center font-weight-bold"
      >
        Solution Thoughts
      </Navbar>
      <div className="col-md-12 col-sm-12 col-xs-12 text-left">
        <Jumbotron className="bg-white ">
          <h4>
            <p>
              This serverless event driven architecture is architected using
              various AWS serverless components.
            </p>
            <p>
              An event driven architecture <b>(EDA)</b> comprises the following
              key components.
            </p>
            <ul>
              <li>
                <b>Event Publisher</b>
              </li>
              <p>
                A component which is exposed using open protocol and can be
                consumed by any consumer. Here it has been thought as{" "}
                <b>
                  <a href="https://aws.amazon.com/dynamodb/">AWS Lambda</a>
                </b>{" "}
                component which is exposed via{" "}
                <b>
                  <a href="https://aws.amazon.com/api-gateway/">
                    AWS API Gateway
                  </a>
                </b>{" "}
                over HTTP. The sole job of this components is to store the
                incoming event into a highly scalable & durable event router.
              </p>
              <li>
                <b>Event Router</b>
              </li>
              <p>
                Another key component which is responsible for routing incoming
                events to appropriate durable persistent stores. Here it has
                been thought as{" "}
                <b>
                  <a href="https://aws.amazon.com/sns/">AWS SNS Topic</a>
                </b>{" "}
                which can filter events based on type and push to appropriate
                event store.
              </p>
              <li>
                <b>Event Store</b>
              </li>
              <p>
                The durable & persistence store to ensure that once an event
                lands in never gets lost. Here it has been thought as{" "}
                <b>
                  <a href="https://aws.amazon.com/sqs/">AWS SQS Queue</a>
                </b>
              </p>
              <li>
                <b>Event Processor</b>
              </li>
              <p>
                This is the core business logic components which decides what
                to do with a specific event. Here it has been thought as a bunch
                of
                <b>
                  <a href="https://aws.amazon.com/lambda/">AWS Lambdas</a>
                </b>{" "}
                which are orchestrated by{" "}
                <b>
                  <a href="https://aws.amazon.com/step-functions/">
                    AWS Stepfunction
                  </a>
                </b>
              </p>
              <p>
                Other than above AWS services there are many other key services
                which has been used here as well
              </p>
              <li>
                <b>
                  <a href="https://aws.amazon.com/iam/">AWS IAM</a>
                </b>{" "}
                - Identity, Authentication & Authorisation
              </li>
              <li>
                <b>
                  <a href="https://aws.amazon.com/cloudwatch/">
                    AWS Cloudwatch
                  </a>
                </b>{" "}
                - Logging
              </li>
              <li>
                <b>
                  <a href="https://aws.amazon.com/xray/">AWS XRay</a>
                </b>{" "}
                - End to end observability
              </li>
              <li>
                <b>
                  <a href="https://aws.amazon.com/secrets-manager/">
                    AWS Secret Manager
                  </a>
                </b>{" "}
                - secrets management
              </li>
              <li>
                <b>
                  <a href="https://aws.amazon.com/s3/">AWS S3</a>
                </b>{" "}
                - Durable storage for logs
              </li>
              <li>
                <b>
                  <a href="https://aws.amazon.com/dynamodb/">AWS DynamoDB</a>
                </b>{" "}
                - Event processing result storage
              </li>
            </ul>
          </h4>
        </Jumbotron>
      </div>
    </div>
  );
}
export default Description;
