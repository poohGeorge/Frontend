import React, { useState } from "react";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the inputText to the backend (replace URL with your backend URL)
      const res = await axios.post("http://127.0.0.1:8000/machineTranslate/translate-text", {
        text: inputText,
        sourceLang: "en",
        targetLang: "ko"
      });
      setResponse(res.data); // Store the response from the backend
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="App">
      <h1>Simple React Frontend</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Text:
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button type="submit">Send</button>
      </form>
      {response && (
        <div>
          <h2>Response from Backend:</h2>
          <p>{JSON.stringify(response)}</p>
        </div>
      )}
    </div>
  );
}

export default App;