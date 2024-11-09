// // import { useState, useEffect } from "react";
// // import { useAuth } from "../contex/auth";
// // import { Outlet, Navigate } from "react-router-dom";
// // import axios from "axios";


// // export default function AdminRoutes() {
// //   const [ok, setOk] = useState(false);
// //   const [auth, setAuth] = useAuth();

// //   useEffect(() => {
// //     const authCheck = async () => {
// //       const res = await axios.get(`${process.env.REACT_APP_API_URL}auth/admin-auth?nocache=${new Date().getTime()}`);

      
// //       if (res.data.ok) {
     
// //         setOk(true);
// //       } else {
  
// //         setOk(false);
// //       }
// //     };



// //     if (auth?.token) authCheck();




// //   }, [auth?.token]);

  
  
// //   if (!ok) {
// //     return <Navigate to="/Login" />;
// //   }

// //   return <Outlet />;
  
// // }


// import { useState, useEffect } from "react";
// import { useAuth } from "../contex/auth";  
// import { Outlet, Navigate } from "react-router-dom";
// import axios from "axios";

// export default function AdminRoutes() {
//   const [ok, setOk] = useState(null);  
//   const [auth, setAuth] = useAuth();

//   useEffect(() => {
//     const authCheck = async () => {
//       try {
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}auth/admin-auth?nocache=${new Date().getTime()}`);
        
//         if (res.data.ok) {
//           setOk(true);
//         } else {
//           setOk(false);
//         }
//       } catch (error) {
//         console.log(error);
//         setOk(false);  
//       }
//     };

//     if (auth?.token) {
//       authCheck();
//     } else {
//       setOk(false);  
//     }
//   }, [auth?.token]);  
//   if (ok === null) {
//     return <div>Loading...</div>; 
//   }


//   if (!ok) {
//     return <Navigate to="/login" />;
//   }

  
//   return <Outlet />;
// }

import { useState, useEffect } from "react";
import { useAuth } from "../contex/auth";
import { Outlet, Navigate } from "react-router-dom";
import axios from "axios";

export default function AdminRoutes() {
  const [ok, setOk] = useState(null);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    // Check for auth token in localStorage on initial load
    const savedToken = localStorage.getItem("authToken");
    if (savedToken && !auth?.token) {
      setAuth({ token: savedToken });
    }

    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}auth/admin-auth?nocache=${new Date().getTime()}`
        );
        setOk(res.data.ok);
      } catch (error) {
        console.log("Error during auth check:", error);
        setOk(false);
      }
    };

    if (auth?.token) {
      localStorage.setItem("authToken", auth.token);
      authCheck();
    } else {
      setOk(false);
    }
  }, [auth?.token, setAuth]);

  if (ok === null) return <div>Loading...</div>;
  return ok ? <Outlet /> : <Navigate to="/login" />;
}
