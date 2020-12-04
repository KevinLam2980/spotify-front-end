import albumArt from "../assets/albumArt.jpg"
import { useState } from "react";

export const intialState = {
    id: "",
    likedSongs: [],
    suggestedSongs: [],
    songList: [],
    isFethcingData: false,
    errorMessage: "",
    hasLikedSongs: false,
    hasSuggestions: false

};

export const spotifyReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_ID':
            return {
                ...state,
                isFethcingData: true,
                hasLikedSongs: false
            }
        case 'ID': {
            return {
                ...state,
                email: "",
                id: action.payload,
                likedSongs: [],
                suggestedSongs: [],
                songList: [
                    {
                        id: 0,
                        songName: "hasd",
                        artistName: "asdasd"
                    }
                ],
                isFethcingData: false,
                errorMessage: "",
            }
        }
        case "INIT_LOAD":
            return {
                ...state,
                isFethcingData: true,
                id: action.payload
            };
        case "SHOW_LIKED":
            return {
                ...state,
                isFethcingData: false,
                likedSongs: action.payload
            };

        case "SET_SONGS":
            return {
                ...state,
                isFethcingData: true,
                songList: action.payload
            };
        case 'UPDATE_USER':

            return {
                ...state,
                email: action.payload
            };
        case "LIKE_SONG":
            return {
                ...state,
                songList: state.songList.filter(song => song.id !== action.payload.id),
                likedSongs: [action.payload],
                hasLikedSongs: true
            }
        case "SET_SUGGESTIONS" : 
            return{
                ...state,
                suggestedSongs: action.payload,
                hasSuggestions: true
            }
        default:
            return state;
    };
};