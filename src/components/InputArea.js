import React from "react";
import { useState } from "react";

export default function InputArea(props) {
  const [InputText, setInputText] = useState("");

  const onChangeHandler = event => {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  return (
    <div className="form">
      <input type="text" onChange={onChangeHandler} value={InputText} />
      <button
        onClick={() => {
          props.onAdd(InputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
