import React, { useState, useRef } from "react";

export default function App9() {
  const [c, setColor] = useState("");
    const txtRef = useRef();
  const handleSubmit = () => {
    txtRef.current.style.color=c;

  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Colour:"
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleSubmit}> Submit</button>
        <h1 ref={txtRef}>Hello World</h1>
      </div>
    </div>
  );
}
