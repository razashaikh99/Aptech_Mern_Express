import React, { useEffect, useState } from 'react'
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function ShowUser() {

    let [user, setUser] = useState([])

    useEffect(() => {
        DataAgaya()
    }, [])

    async function DataAgaya() {
        try {
            await axios.get("http://localhost:3004/gymfit/get").then((a) => {
                console.log(a.data)
                setUser(a.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteRecord(id) {
        try {
            if (window.confirm("Are You Sure You Want To Delete This Record?")) {
                await axios.delete(`http://localhost:3004/gymfit/get/${id}`).then(() => {
                    toast.dark("Record Deleted Successfully")
                    DataAgaya();
                })
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <div className='container'>
            <ToastContainer />
            <h1 className='my-3 text-center'>User Records</h1>
            <div className="row">
                {user.length === 0 ?
                    (
                        <h3>User Not Found</h3>
                    ) :
                    (
                        user.map((a) => (
                            <div class="card text-start mt-3    ">
                                <div class="card-body">
                                    <h4 class="card-title">{a.name}</h4>
                                    <p class="card-text mt-3">- Email: {a.email}</p>
                                    <p class="card-text">- Gender: {a.gender}</p>
                                    <p class="card-text">- Age: {a.age}</p>
                                    <button
                                        onClick={() => deleteRecord(a._id)}
                                        className='btn btn-danger'>
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>


                        ))
                    )
                }
            </div>
        </div>
    )
}
