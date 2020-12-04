import axios from 'axios';

export const SET_SONGS = "SET_SONGS";
export const SET_SUGGESTIONS = "SET_SUGGESTIONS"

export const SHOW_LIKED = "SHOW_LIKED";
export const CALL_ERROR = "CALL_ERROR";

export const LIKE_SONG = "LIKE_SONG";
export const UNLIKE_SONG = "UNLIKE_SONG";

export const UPDATE_USER = "UPDATE_USER";

export const GET_ID = "GET_ID";
export const ID = "ID"


export const loginCall = existingUser => dispatch => {
    dispatch({ type: "GET_ID" })
    axios
        .post("https://spotify-suggestions-backend.herokuapp.com/auth/login", existingUser)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            console.log(response)
            // localStorage.setItem('id', response.data.id)
            dispatch({ type: 'ID', payload: response.data.id })
        })
        .catch(error => {
            dispatch({ type: 'CALL_ERROR', payload: error })
        })
}

export const setSongs = songList => dispatch => {
    dispatch({ type: "SET_SONGS", payload: songList })
}

export const addToLikes = song => dispatch => {
    dispatch({ type: "LIKE_SONG", payload: song })
}


export const addToSuggestions = suggestions => dispatch => {
    dispatch({type: "SET_SUGGESTIONS", payload: suggestions})
}
