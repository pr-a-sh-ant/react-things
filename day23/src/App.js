import React, { useState } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showblock, setshowblock] = useState(false);

  const onClickHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        className="Button"
        onClick={() => {
          setshowblock(!showblock);
        }}
      >
        toggle
      </button>
      <br />
      <Transition>
        <div
          style={{
            margin: "auto",
            backgroundColor: "red",
            width: 100,
            height: 100,
          }}
        ></div>
      </Transition>

      <Modal show={modalIsOpen} closed={onClickHandler} />
      <Backdrop show={modalIsOpen} />
      <button className="Button" onClick={onClickHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
}

export default App;
