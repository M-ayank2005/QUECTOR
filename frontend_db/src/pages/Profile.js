import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          console.log(response)
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user}</p>
      <p>Email: {userData?.email}</p>
      <p>Phone: {userData?.phoneno}</p>
      <p>Address: {userData?.address}</p>
    
      <p>Pincode: {userData?.pincode}</p>
      
      {/* <button onClick={() => localStorage.removeItem('userdata')}>
        Logout
      </button> */}
    </div>
  );
}

export default Profile;
