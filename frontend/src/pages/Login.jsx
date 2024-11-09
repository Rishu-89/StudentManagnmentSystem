import React, { useState } from 'react';
import Layout from "../layout/Layout";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';
import { useAuth } from '../contex/auth';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [auth,setAuth]=useAuth();
  const navigate=useNavigate();
  const location=useLocation();





  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}auth/login`, {
       
        email,
        password,
       
      });
      if (res && res.data.sucess) {
        
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate(location.state || "/home");
       
      }
      else {
        
        toast.error(res.data.message);
      }

    } 
    

    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }

    
  }

  return (
    <Layout >
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h4>
          
          
          
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
          
          
       
          
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
