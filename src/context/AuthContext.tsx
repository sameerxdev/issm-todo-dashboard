import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedLogin = localStorage.getItem("isLoggedIn");
    if (savedUsername && savedLogin === "true") {
      setUsername(savedUsername);
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const login = (username: string) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem("username", username);
    localStorage.setItem("isLoggedIn", "true");
  };

  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
    localStorage.removeItem("username");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
