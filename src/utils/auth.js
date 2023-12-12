src/utils/auth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      // Your authentication logic here
      // e.g., check if user is logged in using OAuth or JWT
      // Set isAuthenticated and user accordingly
      setIsAuthenticated(true);
      setUser({ name: 'John Doe' });
    };

    checkAuth();
  }, []);

  const login = () => {
    // Your login logic here
    // e.g., redirect to OAuth provider or handle login form submission
    setIsAuthenticated(true);
    setUser({ name: 'John Doe' });
  };

  const logout = () => {
    // Your logout logic here
    // e.g., clear authentication tokens or session
    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;
