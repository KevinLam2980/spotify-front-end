import React, { useState } from 'react';
import search from "../assets/search.svg"

import { Link } from "react-router-dom"

import { connect } from "react-redux"
import { setSongs } from "../actions/index";
import axios from "axios";


const Search = props => {
  const [search, setSearch] = useState({
    user_query: ""
  })

  const changeHandler = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = event => {
    event.preventDefault();
    axios.post("https://bw3-ds.herokuapp.com/search", search)
      .then(response => {
        props.setSongs(response.data.tracks.items)
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <>
      <form onSubmit={onSubmit}>
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
        </svg>
        <input
          type="text"
          id="query"
          name="user_query"
          onChange={changeHandler}
          placeholder="Search for Songs"
          value={search.user_query}
        />
      </form>
      <div className="user-card">
        <Link to="/user">
          <svg width="30" height="30" viewBox="0 0 30 30" color="white" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0C6.71571 0 0 6.71571 0 15C0 23.2843 6.71571 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71571 23.2843 0 15 0ZM15 2.90323C21.6854 2.90323 27.0968 8.31357 27.0968 15C27.0968 17.0855 26.5702 19.0469 25.6427 20.7589C24.8321 19.1625 23.3731 17.8833 21.5671 17.3372C22.3905 16.0772 22.8327 14.6049 22.8327 13.0645C22.8327 8.73575 19.3295 5.23185 15 5.23185C10.6712 5.23185 7.16734 8.73502 7.16734 13.0645C7.16734 14.6049 7.60948 16.0772 8.4329 17.3372C6.62921 17.8826 5.16907 19.1603 4.3572 20.7589C3.4298 19.047 2.90323 17.0856 2.90323 15C2.90323 8.31466 8.31357 2.90323 15 2.90323ZM10.1613 13.0645C10.1613 10.3922 12.3276 8.22581 15 8.22581C17.6724 8.22581 19.8387 10.3922 19.8387 13.0645C19.8387 15.7369 17.6724 17.9032 15 17.9032C12.3276 17.9032 10.1613 15.7369 10.1613 13.0645ZM6.53667 23.6457C6.62855 21.5894 8.32421 19.9504 10.4032 19.9504H11.2603C13.5791 21.2138 16.4219 21.2133 18.7397 19.9504H19.5968C21.6758 19.9504 23.3715 21.5894 23.4633 23.6457C18.7609 28.2494 11.2361 28.2465 6.53667 23.6457Z" fill="white" />
          </svg>
        </Link>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    songList: state.songList
  }
}
export default connect(mapStateToProps, { setSongs })(Search) 
