import axios from "axios";
import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef();
  function hSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post("http://localhost:5000/api/avatar", formData);
  }
  return (
    <div className="App">
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="avatar" ref={inputRef} />

        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export default App;
