import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import AxiosCalls from './AxiosCalls'
import logo from './Images/nav-logo.png'

function AddTask() {
    // for post request

    const [userTask, setUserTask] = useState({
        taskName:"",
        taskDescription:""
    })

    const taskhandleInputChange = (e) =>{
        setUserTask({ ...userTask, [e.target.name]: e.target.value})
    }

    const taskhandleClick = (e) =>{
        // e.preventDefault();
        if (userTask.taskName && userTask.taskDescription) {
            console.log(userTask);
            AxiosCalls.post(`/saveUser`, userTask)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((errMsg)=>{
                console.log(errMsg);
            })
        } else {
            alert("Please fill the data")
        }
    }
    return (
        <div className="container">
            <div className="addtask-form">
                <img className="addtask-logo" src={logo} alt="AddTask Logo" />
                <h3 className="addtask-main-heading">Welcome, <span className="reg-user-name">ABC</span></h3>
                <form action="POST">
                    <input className="addtask-empty-box" type="text" />

                    <h3 className="addtask-inner-heading">Add Task</h3>

                    <input className="input-task-name" type="text" name="taskName" id="task-name" value={userTask.taskName} onChange={taskhandleInputChange} placeholder="Task Name" />

                    <input className="input-task-description" type="text" name="taskDescription" id="task-description" value={userTask.taskDescription} onChange={taskhandleInputChange} placeholder="Task Description" />

                    <Link to="/viewtask">
                        <button type="button" className="btn btn-primary addtask-button" onClick={taskhandleClick}>Add Task</button>

                        <button type="button" className="btn btn-primary view-button">View Task</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default AddTask
