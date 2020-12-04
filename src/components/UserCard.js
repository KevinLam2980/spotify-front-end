import React, {useState, useEffect} from "react"
import {useHistory, Link} from "react-router-dom"

import { connect } from "react-redux"

import axios from "axios"

import axiosWithAuth from "../util/axiosWithAuth"

const UserCard = props => {
    const [user, setUser] = useState({
        email: "",
    })


    const {
        push
    } = useHistory();

    const changeHandler = e => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
        ...user,
        [name]: value,
        });
    }

    

    const logOut = () =>{
        localStorage.removeItem('token')
        push("/")
        //Logout
    }


    const deleteAccount = () => {
        axiosWithAuth()
        .delete(`/api/user/${props.id}`)
        .then(res => {
            console.log(res)
            localStorage.removeItem('token')
            push('/') 
        })
        .catch(err =>{
            console.log(err)
        })
    }




    const updateUser = updatedUser => {
        axiosWithAuth()
        .put(`/api/user/${props.id}`, updatedUser)
        .then(res =>{
        console.log(res)
        alert(`Congrats you updated your username to: ${user.email}`)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        // update user to api
        const updatedUser = {
            ...user
        }
        updateUser(updatedUser)
        push('/user')
    }


    useEffect(() => {
        axiosWithAuth()
        .get(`/api/user/${props.id}`)
        .then(res => {
            console.log(res.data.email)
            setUser({
                ...user,
                email: res.data.email
            })
        })
        .catch(err => {
        console.log(err, "Error")
        })
    }, [props.id])


    


    return (
        <div className="user-card-d">
            <form onSubmit={submitHandler}>
                <label className="username-label">Username</label>
                <input 
                type="text"
                value={user.email}
                name="email"
                onChange={changeHandler}
                placeholder="Username"
                id="username-input"
                />             
                
                <button className="account-update-btn"> Save Changes</button>
                
            </form>
             <Link to="/dashboard" className="back-to-dashboard"><button> Go back </button></Link> 
            <button className="delete-account-btn" onClick={deleteAccount}>Delete Account</button>
            <button className="account-logout-btn" onClick={logOut}> Log Out</button>
        
        </div>
    )
}


const mapStateToProps = state => {
    return {
        id: state.id,  
    }    
}


export default connect(mapStateToProps, {})(UserCard);