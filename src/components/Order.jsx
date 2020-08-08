import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Order(props) {
  const [permit, setPermit] = useState(false);

  useEffect(() => {
    if (props.type !== "permission") setPermit(true);
  }, [props.index]);

  return (
    <>
      <Container
        style={{
          backgroundColor: "white",
          paddingTop: "5px",
          paddingBottom: "5px"
        }}
      >
        <Row>
          <Col xs={1} md={1} lg={1}>
            {props.index}.
          </Col>
          <Col xs={2} md={2} lg={2}>
            เวลา {props.time}
          </Col>
          <Col xs={5} md={5} lg={5}>
            {props.message}
          </Col>
          <Col xs={2} md={2} lg={2}>
            <Button
              variant="primary"
              disabled={props.current !== props.index - 1 || !permit}
              onClick={props.handleClick}
            >
              บันทึกเวลา
            </Button>
          </Col>
          {props.type === "permission" && (
            <Col xs={2} md={2} lg={2}>
              <Button
                variant={props.action === "ON" ? "success" : "danger"}
                disabled={props.current !== props.index - 1 || permit}
                onClick={() => setPermit(true)}
              >
                อนุญาต {props.action}
              </Button>
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
