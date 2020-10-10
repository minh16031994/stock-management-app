import React from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import './SignupModal.css';
function SignUpModal() {
    const { register, handleSubmit, errors ,getValues} = useForm();
    const onSubmit = data => {
        e => e.preventDefault()
    }
    return (   
        <div className="modal-wrapper">
            <div className="modal-background">
                <div className="modal-box">
                    <h1>Sign up for your account</h1>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <input type="text"
                            className="input-box-top"
                            placeholder="First Name"
                            name="FirstName"
                            ref={register({ required: "First Name required", minLength: { value: 2, message: "First Name should contain more than two characters" } })}>
                        </input>
                        <input type="text"
                            className="input-box-top"
                            placeholder="Last Name"
                            name="LastName"
                            ref={register({ required: "Last Name required", minLength: { value: 2, message: "Last Name should contain more than two characters" } })}>
                        </input>
                        <input type="email"
                            className="input-box"
                            placeholder="Email Name"
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
                        
                        <input type="password"
                            className="input-box"
                            placeholder="Password Match"
                            name="Password2"
                            ref={register({
                                required: "Password Macth Required",
                                validate: value => {
                                    if (value === getValues()["Password"]) {
                                      return true;
                                    } else {
                                      return "The passwords do not match";
                                    }
                                  }
                                
                            })}>
                        </input>

                        <div><button type="submit" className="Link-button">Submit</button></div>
                        <br/>
                        <hr/>
                        <p className="or">OR</p>
                        <div><Link to='/Login' className="Link-button">Login</Link></div>
                        <div className="Error">
                            {  
                                Object.entries(errors).length !== 0 &&
                                <ul>
                                    {errors.FirstName &&  <li>{errors.FirstName.message}</li>}
                                    {errors.LastName &&  <li>{errors.LastName.message}</li>}
                                    {errors.Email && <li>{errors.Email.message}</li>}
                                    {errors.Password && <li>{errors.Password.message}</li>}
                                    {errors.Password2 && <li>{errors.Password2.message}</li>}
                                </ul>
                            }                            
                        </div>
                    </form>
                   <Link  to="/"className="X-button">X</Link>
                </div>
            </div>
        </div>


    )
}
export default SignUpModal;