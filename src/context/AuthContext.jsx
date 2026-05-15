import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Fake users for demo (in real app this comes from a backend API)
const USERS = [
  { email: "user@gmail.com",  password: "1234", name: "Kamal" },
  { email: "admin@gmail.com", password: "admin", name: "Admin" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (email, password) => {
    const found = USERS.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser(found);
      return true;  // login success
    }
    return false;   // login failed
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
