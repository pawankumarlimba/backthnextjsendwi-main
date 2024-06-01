import { useState } from 'react';
import axios from 'axios';

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (email:string, password:string) => {
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

  return {
    isLoggedIn,
    login
  };
};
