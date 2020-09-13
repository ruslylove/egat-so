import React, { useState, useEffect } from "react";
import Order from "./components/Order";
import Container from "react-bootstrap/Container";
import Switch from "./js/switching_order";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import "./styles.css";
import FileUploader from "./components/FileUploader";
import SwitchingForm from "./components/SwitchingForm";
import Form from "react-bootstrap/Form";

import log from "loglevel";
import { jsPDF } from "jspdf";
import font from "./THSarabunNew-normal";

import Button from "react-bootstrap/Button";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState([]);
  const [swo, setSwo] = useState();
  const [before, setBefore] = useState(true);
  const [after, setAfter] = useState(false);

  const handleChange = (e) => {
    if (before) {
      setBefore(false);
      setAfter(true);
    } else {
      setBefore(true);
      setAfter(false);
    }
  };

  log.setLevel("debug");

  const getTime = () => {
    let now = new Date().toLocaleTimeString("th-TH");
    setTime([...time, now]);
    setCurrent(current + 1);
  };

  const handleUpload = (content) => {
    log.debug("load file sucessful");
    console.log(log.getLoggers());
    setSwo(JSON.parse(content));
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addFileToVFS("THSarabunNew.ttf", font);
    doc.addFont("THSarabunNew.ttf", "Sarabun", "normal");

    doc.setFont("Sarabun");
    //doc.setFontSize(11);

    let text = swo.orders.map((m, index) => {
      return "เวลา " + time[index] + " น.  " + m.message;
    });
    doc.text(10, 10, text);
    //console.log(text);
    doc.save("a4.pdf");
  };

  return (
    <div className="App">
      <Container fluid="xl">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.egat.co.th/en/images/about-egat/logo-egat-color.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            งานวิจัย Automated Switching Order: การไฟฟ้าฝ่ายผลิตฯ สำนักงานลำภูรา
            จ.ตรัง [Demo]
          </Navbar.Brand>
        </Navbar>

        {!swo && (
          <div>
            <Image
              src="https://www.egat.co.th/en/images/about-egat/logo-egat-color.jpg"
              alt="logo"
              rounded
            />
            <FileUploader onUpload={handleUpload} />
          </div>
        )}

        {swo && (
          <div>
            <div style={{ textAlign: "left", marginTop: "1vh" }}>
              <i>ใช้ Switching ต้นแบบ {swo.template}</i>
              <span style={{ float: "right" }}>
                <i>หมายเลข {swo.number}</i>
              </span>
              <Form>
                <Form.Check
                  type="radio"
                  label="ก่อนอนุญาตให้ทำงาน"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  checked={before}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="หลังปฏิบัติงานเสร็จ"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  checked={after}
                  onChange={handleChange}
                />
              </Form>
            </div>
            <div style={{ marginBottom: "2vh" }}>
              <h4>
                {before
                  ? "Switching ก่อนอนุญาตให้ทำงาน"
                  : "Switching หลังปฎิบัติงานเสร็จ"}
              </h4>
            </div>

            <SwitchingForm swo={swo} disabled={false} />
            <ProgressBar
              animated={current < swo.orders.length}
              now={100 * (current / swo.orders.length)}
              style={{ marginTop: "20px", marginBottom: "20px" }}
            />
          </div>
        )}
        {swo && (
          <>
            {swo.orders.map((m, i) => (
              <Order
                key={i}
                index={i + 1}
                message={m.message}
                current={current}
                handleClick={getTime}
                time={time.length > i ? time[i] : "xx:xx:xx"}
                type={m.type}
                action={m.action}
                switch={m.switch}
              />
            ))}
            <div style={{margin:"30px"}}>
            <Button onClick={generatePDF}>ดาวน์โหลด Log [PDF]</Button>{" "}
            <Button onClick={generatePDF} variant="secondary">
              จบการปฏิบัติงาน
            </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
}
