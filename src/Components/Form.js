import React, { useState } from "react";
import "../Styles/Form.css";

export default function Form({ onSearch }) {
  const [state, setState] = useState("");

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.value === "") {
            alert("Please enter a value");
          } else {
            onSearch(state);
            setState("");
            console.log(state);
          }
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Search..."
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input className="form-button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
