import React, { useState } from "react";
import Order from "./components/Order";
import Container from "react-bootstrap/Container";
import Switch from "./js/switching_order";

import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState([]);

  const getTime = () => {
    let now = new Date().toLocaleTimeString();
    setTime([...time, now]);
    setCurrent(current + 1);
  };

  console.log(time);

  return (
    <div className="App">
      <h1>Switching Order [Demo]</h1>
      <Container>
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
          />
        ))}
      </Container>
    </div>
  );
}
