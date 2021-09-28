import React, { useState, useEffect } from 'react'
import logo from './Images/nav-logo.png'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import AxiosCalls from './AxiosCalls'

function UpdateTask() {
    // update user
    const {id} = useParams();
    // console.log(id);
    const [updateUser, setUpdateUser] = useState({
        taskName:"",
        taskDescription:""
    })

    // 1. get data by id
    // 2. pass props by useParams
    // 3. and call update

    useEffect(() => {
        AxiosCalls.get(`/getTaskbyId/${id}`)
            .then((response)=>{
                console.log(response);
                setUpdateUser(response.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [id])

    const saveTask = () =>{
        if (updateUser.taskName && updateUser.taskDescription) {
            AxiosCalls.put(`/updateTaskbyId/${id}`, updateUser)
                .then((response)=>{
                    console.log(response);
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
        else{
            alert("Please fill the data");
        }
    }

    // update task
    const handleUpdateUser=(e)=>{
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <div className="addtask-form">
                <img className="addtask-logo" src={logo} alt="AddTask Logo" />
                <h3 className="addtask-main-heading">Welcome, <span className="reg-user-name">ABC</span></h3>
                <form action="POST">
                    <input className="addtask-empty-box" type="text" />

                    <h3 className="addtask-inner-heading">Update Task</h3>

                    <input className="input-task-name" type="text" name="taskName" id="task-name" value={updateUser.taskName} onChange={handleUpdateUser} placeholder="Task Name" />

                    <input className="input-task-description" type="text" name="taskDescription" id="task-description" value={updateUser.taskDescription} onChange={handleUpdateUser} placeholder="Task Description" />

                    <Link to="/viewtask">
                        <button type="button" className="btn btn-primary addtask-button" onClick={saveTask}>Save Task</button>

                        <button type="button" className="btn btn-primary view-button">View Task</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default UpdateTask
