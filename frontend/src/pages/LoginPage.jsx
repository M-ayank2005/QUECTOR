import React, { useState } from "react";
import img1 from "../lib/img0.jpg";

import But2 from "../components/But2";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/employee/login", {
        email: email,
        password: password,
        }).then((res) => 
        {
         console.log(res.data);
         
         if (res.data.message === "Email not exits") 
         {
           alert("Email not exits");
         } 
         else if(res.data.message === "Login Success")
         { 
            
            navigate('/');
         } 
          else 
         { 
            alert("Incorrect Email and Password not match");
         }
      }, fail => {
       console.error(fail); // Error!
});
    }

     catch (err) {
      alert(err);
    }
  
  }
  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-1/2 h-full bg-black">
        <img src={img1} className="w-full h-full object-cover" alt="Background" />
      </div>
      <div className="w-1/2 h-full px-28 py-14 flex flex-col justify-between">
        <div className="text-xl font-bold">QUECTO</div>
        <div className="flex justify-between flex-col gap-10">
          <div>
            <h1 className="text-2xl font-bold my-2">Login</h1>
            <p>Welcome Back! Please enter your details</p>
          </div>
          <div>
            <form>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="mt-10 flex flex-col gap-3">
              <button type='submit' onClick={login} className="btn btn-wide bg-black  text-white hover:bg-black hover:text-white w-full">Log in</button>
                <But2 />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            Don't have an account? <span className="font-bold"><a href="/"> Sign up for free</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
