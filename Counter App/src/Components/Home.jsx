import React from "react";
import { useState } from "react";

const Home = () => {
  const [initialValue, setInitialValue] = useState(0);

  const Increment = () => {
    if (initialValue < 10) {
      setInitialValue(initialValue + 1);
    }
  };
  const Decrement = () => {
    if (initialValue > 0  ) {
      setInitialValue(initialValue - 1);
    }
  };
  const inputStyle = {
    padding: 10,
    borderRadius: 5,
    border: "none",
    backgroundColor: "turquoise",
    color: "white",
    margin: 10,
    fontSize: 25,
  };

  const btnStyle = {
    padding: 10,
    borderRadius: 5,
    border: "none",
    backgroundColor: "pink",
    color: "white",
    margin: 10,
    fontSize: 25,
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type here"
        style={inputStyle}
        readOnly
        value={initialValue}
      />
      <button style={btnStyle} onClick={Increment}>
        +
      </button>
      <button style={btnStyle} onClick={Decrement}>
        -
      </button>
      De{" "}
    </div>
  );
};

export default Home;
