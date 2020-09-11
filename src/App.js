import React, { useState } from "react";
import Order from "./components/Order";
import Container from "react-bootstrap/Container";
import Switch from "./js/switching_order";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import "./styles.css";
import FileUploader from "./components/FileUploader";
import FirstPage from "./views/FirstPage";

import log from "loglevel";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState([]);
  const [swo, setSwo] = useState();

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

  //console.log(swo);

  //console.log(time);

  return (
    <div className="App">
      <Container fluid>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.egat.co.th/en/images/about-egat/logo-egat-color.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            
              งานวิจัย Automated Switching Order: การไฟฟ้าฝ่ายผลิตสำนักงานลำภูรา
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
          <ProgressBar
            animated={current < swo.orders.length}
            now={100 * (current / swo.orders.length)}
            style={{ marginTop: "20px", marginBottom: "20px" }}
          />
        )}
        {swo &&
          swo.orders.map((m, i) => (
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
      </Container>
    </div>
  );
}
