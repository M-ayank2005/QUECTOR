import React from "react";
import axios from "axios";
import { useState } from "react";
import img1 from "../lib/img0.jpg"

import { useNavigate } from "react-router-dom";
function RegisterPage() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/customer/save", {
        employeename: employeename,
        email: email,
        password: password,
      });
      alert("Employee Registation Successfully");
      navigate("/login")
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="w-full h-screen flex flex-row">
      <div className="w-1/2 h-full px-28 py-14 flex flex-col justify-between">
        <div className="text-xl font-bold">QUECTO</div>
        <div className="flex justify-between flex-col gap-10">
          <div>
            <h1 className="text-2xl font-bold my-2">Create a new account</h1>
            <p className="text-sm">We are ready to onboard you with a new journey</p>
          </div>
          <div>
           <form className="flex flex-col gap-4">
        <div class="form-group">
          
          <input type="text" className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500" id="employeename" placeholder="Enter Name"
          
          value={employeename}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
         
          <input type="email"  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group">
           
            <input type="password" className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" className="btn btn-wide bg-black  text-white hover:bg-black hover:text-white w-full" onClick={save} >Save</button>
       
      </form>
          </div>
        </div>
        <div>
          <div>
            Already have an account?{" "}
            <span className="font-bold">
              <a href="/login"> Jump here to login</a>
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-black">
        <img
          src={img1}
          className="w-full h-full object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
