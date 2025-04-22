import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <div>
            <section className="register-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="register-text">
                                <span>Join Us Now</span>
                                <h2>REGISTER NOW</h2>
                                <p>Get access to exclusive workouts, training plans, and more!</p>
                            </div>
                            <form className="register-form">
                                <div className="rf-input">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                    />
                                  
                                </div>
                                <div className="rf-input">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="rf-input">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="rf-input">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />

                                </div>
                                <div className="rf-input">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number (Optional)"
                                    />
                                </div>
                                <button type="submit" className="primary-btn">
                                    REGISTER NOW
                                </button>
                            </form>
                            <div className="register-login">
                                <span>Already have an account?</span>
                                <Link to="/login" className="rl-link">
                                    LOGIN HERE
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
