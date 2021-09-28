import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AxiosCalls from './AxiosCalls'

function Register() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:""
    })

    const reghandleInputChange = (e) =>{
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const reghandleClick = () =>{
        if (user.name && user.email && user.password) {
            console.log(user);
            AxiosCalls.post(`/saveUser`, user)
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
            <div className="register-form">
                <h2 className="register-heading">Registration</h2>
                <form action="">
                    <div className="register-name space-bottom">
                        <label className="register-namelabel" htmlFor="name">Name:</label><br />
                        <input className="register-nameinput" type="text" name="name" id="name" value={user.name} onChange={reghandleInputChange} placeholder="Enter Name"/>
                    </div>

                    <div className="register-email space-bottom">
                        <label className="register-emaillabel" htmlFor="email">Email:</label><br />
                        <input className="register-emailinput" type="email" name="email" id="email" value={user.email} onChange={reghandleInputChange} placeholder="Enter Email" />
                    </div>

                    <div className="register-password space-bottom">
                        <label className="register-passwordlabel" htmlFor="password">Password:</label><br />
                        <input className="register-passwordinput" type="password" name="password" id="password" value={user.password} onChange={reghandleInputChange} placeholder="Enter Password" />
                    </div>

                    <Link to="/" exact>
                        <div className="d-grid gap-2 col-12 mx-auto mt-2">
                            <button type="submit" className="btn btn-primary btn-sm mt-2 btn-register" onClick={reghandleClick}>Register</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
