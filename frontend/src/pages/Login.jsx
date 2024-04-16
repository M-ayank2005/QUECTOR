import React from "react";
import img1 from "../lib/img1.jpg";
import But1 from "../components/But1";
import But2 from "../components/But2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Login() {
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
                
                navigate('/home');
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
        <img src={img1} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 h-full  px-28 py-14 flex flex-col justify-between">
        <div className="text-xl font-bold">QUECTO</div>
        <div className="flex justify-between flex-col gap-10">
          <div>
            <h1 className="text-2xl font-bold my-2">Login</h1>
            <p>Welcome Back! Please enter your details</p>
          </div>
          <div>
            <form>
              <div class="form-group mb-4">
              
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div className="mt-10 flex flex-col gap-3">
                <But1 func={login}/>
                <But2 />
              </div>
            </form>
          </div>
        </div>
        <div>
          <div>
            Don't have an account ?{" "}
            <span className="font-bold"><a>Sign up for free</a></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
