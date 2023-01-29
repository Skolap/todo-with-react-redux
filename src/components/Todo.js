import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import "./todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  // Store input to inputData
  const inputHandler = (event) => {
    setInputData(event.target.value);
  };

  // Execute on Add button
  const addHandler = () => {
    dispatch(addTodo(inputData));
    setInputData("");
  };
  //Execute on Delete button
  //get id from onclick
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  // Remove All
  const removeAllHandler = () => {
    dispatch(removeTodo());
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {/* Heading */}
          <figure>
            <figcaption>Add your List Here ✌</figcaption>
          </figure>
          {/* Input Box */}
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items..."
              value={inputData}
              onChange={inputHandler}
            />
            <i className="fa fa-plus add-btn" onClick={addHandler}></i>
          </div>

          {/* Show Individual Items */}
          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    onClick={() => deleteHandler(elem.id)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="remove All"
              onClick={removeAllHandler}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
