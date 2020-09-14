import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function SwitchingForm(props) {
  return (
    <>
      <Container fluid>
        <Form>
          <div style={{ textAlign: "end" }}>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                สั่งทำ Switching โดย
              </Form.Label>
              <Col sm={10} md={3}>
                <Form.Control
                  as="input"
                  autoFocus
                  disabled={props.disabled}
                ></Form.Control>
              </Col>{" "}
              <Form.Label column sm="1">
                เมื่อวันที่{" "}
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                เวลา
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>{" "}
              น.
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                ชื่อ Operator 1.
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                สฟ.
              </Form.Label>
              <Col sm={10} md={1}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                2.
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                สฟ.
              </Form.Label>
              <Col sm={10} md={1}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                ชื่อ Operator PEA
              </Form.Label>{" "}
              <Col sm={10}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3">
                แจ้งอนุญาตทำงานแก่ 1. หน่วยงาน{" "}
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                ชื่อ
              </Form.Label>{" "}
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                เวลา
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              น.
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="3" style={{ paddingLeft: "10rem" }}>
                2. หน่วยงาน
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                ชื่อ
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>
              <Form.Label column sm="1">
                เวลา
              </Form.Label>
              <Col sm={10} md={2}>
                <Form.Control
                  as="input"
                  disabled={props.disabled}
                ></Form.Control>
              </Col>{" "}
              น.{" "}
            </Form.Group>
            <Form.Group as={Row}>
              <Col>
                <div style={{ textAlign: "center" }}>
                  <Button>บันทึก และเริ่มต้น Switching</Button>{" "}
                  <Button variant="secondary">ยกเลิก</Button>
                </div>
              </Col>
            </Form.Group>
          </div>{" "}
        </Form>
      </Container>
    </>
  );
}
