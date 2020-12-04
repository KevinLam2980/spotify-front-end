import React from "react"
import { connect } from "react-redux";
import axiosWithAuth from "../util/axiosWithAuth";
import { addToLikes } from "../actions/index"


const Song = props => {

    //let addToLikes = event => {
    //event.preventDefault();

    // axiosWithAuth()
    //     .post(`https://spotify-suggestions-backend.herokuapp.com/api/user/${props.user_id}/like/20I6sIOMTCkB6w7ryavxtO`)
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    return (
        <div className="song">
            <img src={props.image} alt="album art" />
            <h4>{props.name}</h4>
            <p>{props.artist}</p>
            <p>{props.album}</p>
            <button onClick={() => props.addToLikes(props.song)}>Like</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_id: state.id,
        likedSongs: state.likedSongs
    }
}

export default connect(mapStateToProps, { addToLikes })(Song);