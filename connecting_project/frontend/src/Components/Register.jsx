import React, { useState } from 'react'
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import "../Styling/Register.css"

export default function Register() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [pswd, setPswd] = useState("")
    let [gender, setGender] = useState("")
    let [age, setAge] = useState(0)

    function clear() {
        setName("");
        setEmail("");
        setGender("");
        setPswd("")
        setAge(0)
    }

    async function register_user(e) {
        e.preventDefault()
        try {
            let userapi = await axios.post("http://localhost:3004/gymfit/user", {
                name: name,
                email: email,
                password: pswd,
                gender: gender,
                age: age
            })
            clear()
            console.log("User Register ")
            toast.success(userapi.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5 mb-5">
        
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4" style={{ backgroundColor: "#111", color: "#fff", border: "1px solid #333" }}>
                        <h2 className="text-center mb-4" style={{ color: "#ff6a00" }}>Join the Gym Team 💪</h2>
                        <ToastContainer />
                        <form onSubmit={register_user}>
                    
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">- Full Name</label>
                                <input type="text" id="name" className="form-control"
                                    style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                                    value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">- Email Address</label>
                                <input type="email" id="email" className="form-control"
                                    style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">- Password</label>
                                <input type="password" id="password" className="form-control"
                                    style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                                    value={pswd} onChange={(e) => setPswd(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label d-block">- Gender</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="male" value="male"
                                        onChange={(e) => setGender(e.target.value)} checked={gender === "male"} />
                                    <label className="form-check-label" htmlFor="male">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="female" value="female"
                                        onChange={(e) => setGender(e.target.value)} checked={gender === "female"} />
                                    <label className="form-check-label" htmlFor="female">Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="other" value="other"
                                        onChange={(e) => setGender(e.target.value)} checked={gender === "other"} />
                                    <label className="form-check-label" htmlFor="other">Other</label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="age" className="form-label">- Age</label>
                                <input type="number" id="age" className="form-control" min="13"
                                    style={{ backgroundColor: "#222", color: "#fff", borderColor: "#444" }}
                                    value={age} onChange={(e) => setAge(e.target.value)} required />
                            </div>

                            <button type="submit" className="btn w-100 mt-4" style={{ backgroundColor: "#ff6a00", color: "#fff" }}>
                                Register Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       
        </div>
    )
}
