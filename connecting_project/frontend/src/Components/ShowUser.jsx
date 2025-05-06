import React, { useEffect, useState } from 'react'
import axios from "axios"
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function ShowUser() {

    let [user, setUser] = useState([])

    let [updateName, setUpdateName] = useState("")
    let [updateEmail, setUpdateEmail] = useState("")
    let [updateGender, setUpdateGender] = useState("")
    let [updateAge, setUpdateAge] = useState(0)
    let [updateId, setUpdateId] = useState("")

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

    function setData(a, b, c, d, e,) {
        setUpdateName(a);
        setUpdateEmail(b);
        setUpdateGender(c);
        setUpdateAge(d);
        setUpdateId(e);
    }

    async function updateEditFunction() {
        try {
            await axios.put(`http://localhost:3004/gymfit/get/${updateId}`, {
                name: updateName,
                email: updateEmail,
                gender: updateGender,
                age: updateAge,
            }).then((a) => {
                DataAgaya();
                document.querySelector(".closee").click();
                toast.success("Record Update Successfully  ")
            })
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
                                        className='btn btn-danger mr-2'>
                                        <i class="bi bi-trash"></i> &nbsp;
                                        Delete
                                    </button>
                                    <button
                                        class="btn btn-primary"
                                        type="button"
                                        onClick={() => setData(a.name, a.email, a.age, a.gender, a._id)}
                                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                        <i class="bi bi-pen"></i> &nbsp;
                                        Update
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                }

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Update User</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>- Edit Name</p>
                                <input type="text" className='form-control mb-3' value={updateName} onChange={((e) => { setUpdateName(e.target.value) })} />
                                <p>- Edit Email</p>
                                <input type="text" className='form-control mb-3' value={updateEmail} onChange={((e) => { setUpdateEmail(e.target.value) })} />
                                <p>- Edit Gender</p>
                                <input type="number" className='form-control mb-3' value={updateAge} onChange={((e) => { setUpdateAge(e.target.value) })} />
                                <p>- Edit Gender</p>
                                <input type="radio" name='gender' value='male' onChange={((e) => { setUpdateGender(e.target.value) })} checked={updateGender === "male"} />
                                &nbsp; Male &nbsp;
                                <input type="radio" name='gender' value='female' onChange={((e) => { setUpdateGender(e.target.value) })} checked={updateGender === "female"} />
                                &nbsp; Female &nbsp;
                                <input type="radio" name='gender' value='other' onChange={((e) => { setUpdateGender(e.target.value) })} checked={updateGender === "other"} />
                                &nbsp; Other &nbsp;
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary closee" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={updateEditFunction}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
