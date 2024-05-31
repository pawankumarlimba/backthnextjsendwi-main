import axios from "axios";
import { useState } from "react";

export const login = async (email:string, password:string) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    try {
        const response = await axios.post('/api/user/login', {
          email,
          password
        });
        if (response.data.success) {
          setIsLoggedIn(true);
          localStorage.setItem("isLoggedIn", "true"); 
          
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Login error:", error);
        return false;
      }
    };




