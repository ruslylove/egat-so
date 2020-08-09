import React, { useState } from "react";
import Order from "./components/Order";
import Container from "react-bootstrap/Container";
import Switch from "./js/switching_order";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "react-bootstrap/Navbar";

import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState([]);

  const getTime = () => {
    let now = new Date().toLocaleTimeString("th-TH");
    setTime([...time, now]);
    setCurrent(current + 1);
  };

  //console.log(time);

  return (
    <div className="App">
      <Container fluid="lg">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.egat.co.th/en/images/about-egat/logo-egat-color.jpg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
            EGAT Switching Order [Demo]
          </Navbar.Brand>
        </Navbar>
        <ProgressBar
          animated={current < Switch.orders.length}
          now={100 * (current / Switch.orders.length)}
          style={{ marginTop: "20px", marginBottom: "20px" }}
        />
        {Switch.orders.map((m, i) => (
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
