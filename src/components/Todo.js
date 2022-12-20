import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");

  // Store input to inputData
  const inputHandler = (event) => {
    setInputData(event.target.value);
  };

  // Execute on Add button
  const addHandler = () => {};
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={inputHandler}
            />
            <i className="fa fa-plus add-btn" onClick={addHandler}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
