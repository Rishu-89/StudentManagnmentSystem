import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../contex/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [auth,setAuth]=useAuth();


  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    
  };

  return (
  
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          SMS
        </Link>

        {/* Search bar */}
        

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Links */}
        <div
          className={`md:flex items-center space-x-6 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <Link to="/home" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
            Home
          </Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
           about
          </Link>
              {auth?.user?.role === 1 && <>
                <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className=""
                        >
                          Dashboard
                        </Link>
              </>}  
         

          {auth?.user ?<Link onClick={handleLogout}
                          to="/Login" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
            Logout
          </Link>:
          <>
          <Link to="/Login" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
          SignIn
        </Link>
        <Link to="/Register" className="block px-4 py-2 hover:bg-blue-700 rounded-md">
          SignUp
        </Link>
        </>
          }
          
        </div>
      </div>

      {/* Mobile Search bar */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex items-center border border-white rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-transparent text-white focus:outline-none w-full"
            />
            <button className="px-3">
             
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
