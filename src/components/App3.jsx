import { useState } from "react";

export default function App3() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = () => {
    if (email === "john@gmail.com" && password === "123") {
      setMsg("Welcome John!");
    } else {
      setMsg("Access Denied!");
    }
  };

  return (
    <div>
      <h3>Login Form</h3>
      <p>
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      {msg && <p>{msg}</p>}
    </div>
  );
}
