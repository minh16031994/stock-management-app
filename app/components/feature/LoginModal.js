import React from 'react'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import './SignupModal.css';
import './LoginModal.css';
function LoginModal(){
    const { register, handleSubmit, errors ,getValues} = useForm();
    const onSubmit = data => {
        e => e.preventDefault()
    }
    return(
        <div className="modal-wrapper">
            <div className="modal-background">
                <div className="modal-box">
                    <h1>Login your account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="email"
                            className="input-box"
                            placeholder="Email Address"
                            name="Email"
                            ref={register({
                                required: "Email Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                },
                                validate: value => value !== "admin" || "Nice try!"
                            })}>
                        </input>
                        <input type="password"
                            className="input-box"
                            placeholder="Password"
                            name="Password"
                            ref={register({
                                required: "Password Required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i,
                                    message: "Too Week password"
                                }
                            })}>
                        </input>
                        <div><button type="submit" className="Link-button">Submit</button></div>
                        <br/>
                        <hr/>
                        <p className="or">OR</p>
                        <div><Link to='/Signup' className="Link-button">Login</Link></div>
                        <div className="Error">
                                           
                        </div>
                    </form>
                   <Link  to="/"className="X-button">X</Link>
                </div>
            </div>
        </div>
    )
}
export default LoginModal;