import React from "react"

const Like = props => {
    return (
        <div className="like">
            <img src={props.image} alt="album art" />
            <h4>{props.name}</h4>
            <p>{props.artist}</p>
            <p>{props.album}</p>
        </div>
    )
}

export default Like;