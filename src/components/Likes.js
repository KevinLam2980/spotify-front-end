import React from "react"
import { connect } from "react-redux"
import Like from "./Like";

const Likes = props => {
    return (
        <div className="likes">
            <h2 id='like-header-grn'>
                Likes:
            </h2>
            <div className="imported-likes-ax">
                {/* Map over Liked Songs here */}

                {
                    !props.hasLikedSongs ? (
                        'Like a song!'
                    ) : (props.likes.map(like => {
                        return (

                            <Like
                                key={like.id}
                                id={like.id}
                                name={like.name}
                                album={like.album.name}
                                artist={like.artists[0].name}
                                image={like.album.images[0].url}
                                like={like}
                            />
                        )

                    }))
                }


            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        likes: state.likedSongs,
        hasLikedSongs: state.hasLikedSongs,
    }
}

export default connect(mapStateToProps, {})(Likes);