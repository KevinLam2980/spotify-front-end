import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { loginCall } from "../actions/index"
import axios from "axios";
import axiosWithAuth from "../util/axiosWithAuth";
import formSchema from '../Validation/formSchema'
import * as Yup from 'yup'

const emptyUser = {
    email: "",
    password: ""
};

const initialFormErrors = {
    email: '',
    password: '',
}

const initialDisabled = true

const SignIn = props => {
    const { push } = useHistory();

    const [form, setForm] = useState(emptyUser);
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const handleChange = e => {
        const { name, value } = e.target;

        Yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: ""
                })
            })
            .catch(err => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setForm({ ...form, [name]: value });
    }

    // let loginUser = () => {
    //     loginCall(form);
    //     setForm(emptyUser);

    // }



    const handleSubmit = e => {
        e.preventDefault();
        const existingUser = {
            email: form.email.trim(),
            password: form.password.trim()
        }
        props.loginCall(existingUser);
        setForm(emptyUser);
        // set a timeout - 2 seconds
        setTimeout(function () { push("/dashboard") }, 2000);


    }

    useEffect(() => {
        formSchema.isValid(form).then(valid => {
            setDisabled(!valid)
        })
    }, [form])

    const routeToSignup = e => {
        push("/");
    }


    return (
        <div className="signin-div">
            <h2>Welcome back! Log in</h2>
            <div className="schemaErrors">
                <h4>{formErrors.email}</h4>
                <h4>{formErrors.password}</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    name="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                />
                <br />
                <button className="signup" disabled={disabled}>Log in</button>
            </form>
            <div>
                <p>New here?
                    <div className="login" onClick={routeToSignup}>Sign up</div>
                </p>
            </div>
        </div>
    )
}


export default connect(null, { loginCall })(SignIn);