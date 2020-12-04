import React, { useEffect } from "react"



import Search from "./Search"
import Likes from "./Likes"
import Suggestions from "./Suggestions"
import SongList from "./SongList"

import { connect } from "react-redux"
import { setSongs } from "../actions/index";
import { addToSuggestions } from "../actions/index"

import spotifylogo from "../assets/spotifylogo.png"
import axios from "axios";


const Dashboard = props => {
  // useEffect(() => {
  //   axios.get("https://spotify-suggestions-backend.herokuapp.com/spotify/tracks")
  //     .then(response => {
  //       props.setSongs(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }, []);

  const getSuggestions = () => {
     const proxyurl = "https://cors-anywhere.herokuapp.com/";
      axios.post(proxyurl + 'https://whispering-refuge-19940.herokuapp.com/prediction',
         {
        "song_id_list":
         [
            `${props.likedSongs[0].id}`
        ],
        "recommendation_count": 10
        })
        .then(response => {
         console.log(response.data.recommended_song_id_list)
          props.addToSuggestions(response.data.recommended_song_id_list)
        })

  }

  return (
    <>
      <header className="nav-search">
        <img src={spotifylogo} alt="" id="logo" />
        <div className="search-container">
          <div className="search-fnc">
            <Search />
          </div>
        </div>
      </header>

      <div className="rendered-songs">
        <SongList />
      </div>

      <div className="likes-container">
        <Likes />
      </div>

      <button onClick={getSuggestions}>Get Suggestions</button>

      <div className="suggestions-container">
        <Suggestions />
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    id: state.id,
    songList: state.songList,
    likedSongs: state.likedSongs
  }
}
export default connect(mapStateToProps, { setSongs, addToSuggestions })(Dashboard);



