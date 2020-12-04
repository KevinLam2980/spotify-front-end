import React from "react"

const Suggestion = props => {
    return (
        <div className="suggestion">
            <img src={props.album_image} alt="Song Art" />
            <h3>{props.song_name}</h3>
             <p>{props.artists}</p> 
        </div>
    )
}

export default Suggestion;