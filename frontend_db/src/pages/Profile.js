import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';
import q1 from "../lib/q1.jpg"
const Profile = () => {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem('userdata');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      setUser(parsedData.username);
    }
  }, []);

  useEffect(() => {
    // Fetch user data from the API when the user state changes
    if (user) {
      axios.get(`http://127.0.0.1:8080/api/user/${user}`)
        .then(response => {
          setUserData(response.data);
          console.log(response);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      
      <div className="card w-96 bg-white shadow-xl rounded-lg mt-10 p-6 hover:shadow-2xl transition-shadow duration-300">
   
        <div className="text-center mb-4">
          <img 
            src={q1} 
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-lg font-medium">{user}</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600"><strong>Email:</strong> {userData?.email}</p>
          <p className="text-gray-600"><strong>Phone:</strong> {userData?.phoneno}</p>
          <p className="text-gray-600"><strong>Address:</strong> {userData?.address}</p>
          <p className="text-gray-600"><strong>Pincode:</strong> {userData?.pincode}</p>
        </div>
        <button 
          className="btn btn-primary bg-[#46bd3b] outline-none hover:bg-black border-black text-white w-full mt-6 hover:scale-105 transition-transform duration-300"
          onClick={() => {
            localStorage.removeItem('userdata');
            window.location.reload();
          }}
        >
          Logout
        </button>
      </div>
    </div>
    </>
  );
}

export default Profile;
