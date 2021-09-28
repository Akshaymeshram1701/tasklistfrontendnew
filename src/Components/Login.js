import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from './Images/nav-logo.png'
import AxiosCalls from './AxiosCalls'

function Login() {
    const [loginUser, setloginUser] = useState({
        email:"",
        password:""
    })

    const loghandleInputChange = (e) =>{
        setloginUser({ ...loginUser, [e.target.name]: e.target.value})
    }

    const loghandleClick = () =>{
        if (loginUser.email && loginUser.password) {
            console.log(loginUser);
            AxiosCalls.post(`/login`, loginUser)
            .then((response)=>{
                console.log(response.data);
            })
            .catch((errMsg)=>{
                console.log(errMsg);
            })

            // sessionStorage.setItem(email:loginUser.email)
        } 
        else {
            alert("Please fill the data")
        }
    }

    return (
        <div className="container">
            <div className="login-form">
                <h2 className="login-heading">Login</h2>
                <img className="heading-logo" src={logo} alt="heading logo" />
                <form>
                    <div className="login-username">
                        <label className="login-usernamelabel" htmlFor="username">Username:</label><br />
                        <input className="login-usernameinput" type="text" name="userName" id="username" value={loginUser.userName} onChange={loghandleInputChange} placeholder="Enter Username" />
                    </div>
                    <div className="loginpassword">
                        <label className="login-passwordlabel" htmlFor="password">Password:</label><br />
                        <input className="login-passwordinput" type="password" name="password" id="password" value={loginUser.password} onChange={loghandleInputChange} placeholder="Enter Password" />
                    </div>
                    
                    <Link to="/addtask">
                        <div className="d-grid gap-2 col-12 mx-auto mt-2">
                            <button type="button" className="btn btn-primary btn-sm mt-2 btn-login" onClick={loghandleClick}>Login</button>
                        </div>
                    </Link>

                    <Link to="/registration">
                        <div className="create-user mt-5">
                            <a className="create-user-text" href="./Register.js">
                                Not register yet? Create an account
                            </a>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
