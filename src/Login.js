import { useState } from "react"
import React from 'react'
import { Card } from "react-bootstrap"
import './Login.css';
import {Navigate, Outlet, Redirect} from "react-router";

function Login() {
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
const [errorMessage,setErrorMessage]=useState({value:""})

    const change = (ev) => {
        setForm((prevState)=>{
            return{ ...prevState, [ev.target.name]: [ev.target.value] }})}
           
    
    const submit = (e) => {
        if (form.name === "" || form.password === "") {
            setErrorMessage((prevState) => ({
              value: "Empty username/password field",
            }));
      
        
          } else if (
            form.name.toLowerCase() === "admin" &&
            form.password === "123456"
          ) {
            //Signin Success
            localStorage.setItem("isAuthenticated", "true");
            window.location.pathname = "/";
          } else {
            //If credentials entered is invalid
            setErrorMessage((prevState) => ({ value: "Invalid username/password" }));
            return;
          }
        };
   
        const[nav,setNav]=useState(false)
if(nav){
    return <Navigate to ="/Navv"/>
}   

    return (
        <div className="photo" >
           
            <br></br><br />
            <div  >


                <div className="logincard">
                    <Card className="logincard"
                   style={{width :"26rem",textAlign:"center",'background-color': 'black' }}  >
                        <Card.Body>
                            <Card.Title style={{ 'color': 'white' }}><h1>Shop of Hope</h1></Card.Title>
                       
                            <Card.Text >
                                <form className="form-login" center onSubmit={submit}>
                                    <label style={{ 'color': 'white' }}> Name :
                                        <input type="text" name="name" onChange={change}></input>
                                    </label><br></br><br></br>
                                    <label style={{ 'color': 'white' }}> Pswd :
                                        <input type="Password" name="password" onChange={change}></input>
                                    </label><br></br><br></br>
                                    <button onClick={setNav}>submit</button>
                                </form>
                            </Card.Text>

                        </Card.Body>

                    </Card>
                </div>
            </div>
         
        </div>

    )

}
export default Login;
