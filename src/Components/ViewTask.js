import React, { useEffect, useState } from 'react'
import logo from './Images/nav-logo.png'
import { Link } from 'react-router-dom'
import AxiosCalls from './AxiosCalls'
// import axios from 'axios'

function ViewTask() {
    // Fetch all task 
    const [userTaskList, setUserTaskList] = useState([])
    
    // Get request
    useEffect(() => {
        AxiosCalls.get(`/getAllUserData`)
            .then((response)=>{
                // console.log(response.data);
                setUserTaskList(response.data);
            })
    },[])

    const deleteTask = (id) =>{
        var delItem = window.confirm("Are you sure to delete this item?")
        if(delItem === true){
            AxiosCalls.delete(`/deleteUserTask/${id}`)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })
    
            window.location.reload(false);
        }
        else{
            
        }
    }

    return (
        <div className="container">
            <div className="viewtask-form">
                <img className="viewtask-logo" src={logo} alt="AddTask Logo" />
                <h3 className="viewtask-main-heading">Welcome, <span className="reg-user-name">ABC</span></h3>
                <form action="">
                    <div className="button-outer-line">
                        <Link to="/addtask">
                            <button className="viewtask-button">Add Task</button>
                        </Link>
                        |
                        <Link to="/viewtask">
                            <button className="viewtask-button">View</button>
                        </Link>

                    </div>
                    <div className="search-input">
                        <input className="view-search-box" type="text" placeholder="Search By" />
                        
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>
                    
                    {/* Update user */}
                    {/* <div className="updateInput">
                        <input className="input-update" type="text" name="taskName" id="task-name" value={updateUser.taskName} onChange={handleUpdateUser} placeholder="Task Name" />
                        <input className="input-update" type="text" name="taskDescription" id="task-description" value={updateUser.taskDescription} onChange={handleUpdateUser} placeholder="Task Description" />
                        <button type="button" className="btn btn-primary" onClick={saveTask}>Update</button>
                    </div> */}
                </form>
                <div className="table-responsive container mt-5">
                    <table className="table table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>TaskName</th>
                                <th>TaskDescription</th>
                                <th>Edit and Save</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {userTaskList.map((user, id)=>(
                            <tbody key={id}>
                                <tr>
                                    <td>{user.taskName}</td>
                                    <td>{user.taskDescription}</td>
                                    <td>
                                        <Link to={`/updatetask/${user._id}`}>
                                            <button type="button" className="controls-btn"><i className="far fa-edit"></i></button>
                                        </Link>
                                    </td>
                                    <td> <button type="button" className="controls-btn" onClick={()=>deleteTask(user._id)}><i className="far fa-trash-alt"></i></button> </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewTask
