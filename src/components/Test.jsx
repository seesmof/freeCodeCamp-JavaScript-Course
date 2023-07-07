import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/message.txt")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <button>Generate Greeting</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
