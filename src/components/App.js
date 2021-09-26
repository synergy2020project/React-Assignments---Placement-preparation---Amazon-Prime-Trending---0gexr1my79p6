import React, { Component, useState } from "react";
import "../styles/App.css";
import slides from "../data";

const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div id="slide">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">{slides[index].text}</p>
      </div>
      <div id="navigation">
        <button
          disabled={index === 0}
          data-testid="button-prev"
          onClick={() => {
            setIndex((index) => index - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={index === 0}
          data-testid="button-restart"
          onClick={() => {
            setIndex(0);
          }}
        >
          Restart
        </button>
        <button
          disabled={index === slides.length - 1}
          data-testid="button-next"
          onClick={() => {
            setIndex((index) => index + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default App;