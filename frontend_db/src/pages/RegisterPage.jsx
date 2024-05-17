import React from "react";
import axios from "axios";
import { useState } from "react";
import img1 from "../lib/img0.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [role, setRole] = useState("user"); // Default role

  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8080/api/auth/signup", {
        username: username,
        email: email,
        password: password,
        phoneno: phoneno,
        address: address,
        pincode: pincode,
        role: [role], // Sending role as an array
      });
      toast.success("Registration Successfully");
      navigate("/login");
      try{
        await axios.post("http://localhost:8080/api/sendRegistrationMail",{
          recipient :email,
          msgBody:username,
          subject:"Registration Successfull-Quecto",
        })
      }
      catch(err){
        console.log(err)
      }
    } catch (err) {
      toast.error(err.message);
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
            <form className="flex flex-col gap-4" onSubmit={save}>
              <div className="form-group">
                <input
                  type="text"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="username"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="phoneno"
                  placeholder="Enter Phone Number"
                  value={phoneno}
                  onChange={(event) => setPhoneno(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="address"
                  placeholder="Enter Address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="border-b w-full border-gray-300 pb-1 outline-none text-gray-500"
                  id="pincode"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(event) => setPincode(event.target.value)}
                />
              </div>
             
              <button
                type="submit"
                onClick={save}
                className="btn bg-black text-white hover:bg-black hover:text-white w-full"
              >
                Save
              </button>
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
