import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Signup from "./pages/Signup";
import Notfound from "./pages/NotFound";
import { useAuth } from "./context/AuthContext";

function App() {
  console.log(useAuth()?.isLoggedIn)
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Chat />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </main>
  );
}

export default App;
