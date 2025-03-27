import React, { useState, useEffect,useRef } from "react";

export default function App10() {
  const [a, setA] = useState(0);
  const divRef = useRef();
   const numRef = useRef(); 
  useEffect(() => {
   
    if (numRef.current>a){
        divRef.current.style.color="red";
    }
    else{
        divRef.current.style.color="green";
    }
    numRef.current=a
  }, [a]);
  return (
    <div>
      <h4>App10</h4>
      <input
        type="number"
        placeholder="Enter num"
        onChange={(e) => setA(e.target.value)}
      />
      <p>
        <h3 ref={divRef}>{a}</h3>
      </p>
    </div>
  );
}
