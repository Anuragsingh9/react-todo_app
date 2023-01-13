import React, { useEffect } from "react";
import "./RegisterForm.css"
import { useState } from "react";

const RegisterForm = () => {

    const [isValidForm, setIsValidForm] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        validateFirstName()
    }, [isFirstNameValid])

    const validateFirstName = () => {
        console.log('firstname', firstName.length);
        if (firstName.length < 6) {
            setIsFirstNameValid(false);
        } else {
            setIsFirstNameValid(true)
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value > 6) {
            setIsFirstNameValid(true)
        } else {
            setIsFirstNameValid(false)
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || email === "" || isFirstNameValid) {
            setIsValidForm(false);
            validateFirstName();
        } else {
            setIsValidForm(true);
            setFormSubmitted(true);
        }
    }


    return (<React.Fragment>
        <div className="form-main">
            <div class="col-md-4 offset-4 register-form-body">
                <form className="register-form">
                    {formSubmitted && <div className="success-box">Success!! Form submitted</div>}
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" onChange={handleFirstName} class="form-control" id="exampleInputEmail1" value={firstName} aria-describedby="emailHelp" placeholder="Enter email" />
                        {(!isValidForm && !isFirstNameValid) && <span className="error-msg">Please enter you first name(Altleast 6 char)</span>}
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" onChange={handleLastName} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={lastName} placeholder="Enter email" />
                        {(!isValidForm && !lastName) && <span className="error-msg">Please enter you last name</span>}
                    </div>
                    <div class="form-group mt-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={handleEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} placeholder="Enter email" />
                        {(!isValidForm && !email) && <span className="error-msg">Please enter you email</span>}
                    </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary mt-2 col-md-4 offset-4">Submit</button>
                </form>
            </div>
        </div>

    </React.Fragment>)
}

export default RegisterForm;