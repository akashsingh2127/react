import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { setuser } = useContext(UserContext); 
{/*we get setuser from userContext file where we sue useState for it and this is also props where we directly get access of these because these were passed in the values */}
  const handleSubmit = (e) => {
    e.preventDefault();
    setuser({ username, password }); // sets global context
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-2">
      <h2 className="text-xl font-semibold">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Username"
        className="border px-3 py-1 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="Password"
        className="border px-3 py-1 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
