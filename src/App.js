import React, { useState } from "react";
import "./styles.css";
import InputArea from "./components/InputArea";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [items, setItems] = useState([]);

  const addItems = inputText => {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  };

  const deleteItems = id => {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="contsiner">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <ToDoItem
                key={index}
                id={index}
                text={item}
                onChecked={deleteItems}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
