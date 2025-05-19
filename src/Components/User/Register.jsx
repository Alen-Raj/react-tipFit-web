import { useContext } from "react";
import { myContext } from "../Partials/Context";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function Register() {
  const {
    userName,
    setUserName,
    userMail,
    setUserMail,
    password,
    setPassword,
    users,
    setUsers,
    cPassword,
    setCpassword,
  } = useContext(myContext);

  const Nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !userMail || !password || !cPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== cPassword) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      Name: userName,
      email: userMail,
      Password: password,
    };

    setUsers([...users, newUser]);
    alert("User registered successfully");

    setUserName("");
    setUserMail("");
    setPassword("");
    setCpassword("");

    Nav("/login");
  }

  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f8ff" }}>
        <img src="https://cdn.pixabay.com/photo/2015/12/12/17/52/building-1089861_1280.jpg" style={{position:"relative",width:"1000vh",height:"100vh"}}/>
      <div style={{position:"absolute", backgroundColor: "white", width: "900px", height: "550px", display: "flex", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", overflow: "hidden" }}>
        
        <div style={{ flex: 1, backgroundColor: "black", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <img
            src="https://media.istockphoto.com/id/465986107/photo/the-continuation-of-soul-geometry.jpg?s=612x612&w=0&k=20&c=EdR_WxcKZHK94th7seSGPyoKfPdhsJ_nX7pKRPpPnhA="
            alt="Animated"
            style={{ width: "300px", height: "300px" }}
          />
        </div>

        <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Register Now</h2>
          
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={userMail}
              onChange={(e) => setUserMail(e.target.value)}
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" }}
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={cPassword}
              onChange={(e) => setCpassword(e.target.value)}
              style={{ padding: "12px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "14px" }}
            />
            <button
              type="submit"
              style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}
            >
              Register
            </button>
          </form>

          <p style={{ marginTop: "20px", textAlign: "center" }}>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
