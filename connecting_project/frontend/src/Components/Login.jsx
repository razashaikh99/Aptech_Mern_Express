import React, { useState } from 'react'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "../Styling/Register.css"
import { Link } from 'react-router-dom';

export default function Login() {

  let [email, setEmail] = useState("")
  let [Password, setPassword] = useState("")

  function clear() {
    setEmail("");
    setPassword("")
  }

  async function loginFunction() {
    try {
      await await axios.post("http://localhost:3004/gymfit/login", {
  email: email,
  password: Password
})
.then((a) => {
        localStorage.setItem("User Infromation", JSON.stringify(a.data.user))
        // toast.success(a.data.message)
        // console.log("success")
        setEmail("");
        setPassword("");
      })
    } catch (error) {
      console.log(error)
      // toast.error(error.data.response.message)
    }
  }

  return (
    <div className="container mt-5 mb-5">

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4" style={{ backgroundColor: "#111", color: "#fff", border: "1px solid #333" }}>
            <h2 className="text-center mb-4" style={{ color: "#ff6a00" }}>Join the Gym Team 💪</h2>
            <ToastContainer />

            <div className="mb-3">
              <label htmlFor="email" className="form-label">- Email</label>
              <input type="email" id="email" className="form-control"
                style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">- Password</label>
              <input type="password" id="password" className="form-control"
                style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                value={Password} onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button
              className="btn w-100 mt-4"
              onClick={loginFunction}
              style={{ backgroundColor: "#ff6a00", color: "#fff" }}>
              Login Now
            </button>

            <Link to="/register" className='mt-3 text-center text-decoration-none'>You Dont have a Account? Please Register</Link>

          </div>
        </div>
      </div>

    </div>
  )
}
