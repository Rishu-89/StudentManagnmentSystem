import React, { useState } from 'react';
import Layout from "../layout/Layout";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  
  const navigate = useNavigate();

  //

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(` ${process.env.REACT_APP_API_URL}auth/register`, {
        name,
        email,
        password,
        phone,
      });
      if (res && res.data.sucess) {
        toast.success(res.data.message);
        console.log("Login sucessfully")
        navigate("/Login");
        console.log("Login sucessfully")
      } else {
        console.log(res.data.message)
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout >
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h4>
          
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Email"
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Password"
              required
            />
          </div>
          
          <div className="mb-4">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter Your Phone"
              required
            />
          </div>
       
          
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
