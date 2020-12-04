import React from "react"
import { connect } from "react-redux";

import Song from "./Song"

const SongList = props => {
    return (
        <div className="render-songs-cnt">

            {/* If isFethcingData = falsey 
        then we go ahead and map over songsList,
        but if isfetchingdata is true, we display a string 
        that says 'Search for songs!' */}

            {
                !props.isFethcingData ? (
                    'Search for something!'
                ) : (props.songList.map(song => {
                    return (
                        <Song
                            key={song.id}
                            id={song.id}
                            name={song.name}
                            album={song.album.name}
                            artist={song.artists[0].name}
                            image={song.album.images[0].url}
                            song={song}
                        />
                    )
                })
                    )

            }
        </div>

    )
}


const mapStateToProps = state => {
    return {
        songList: state.songList,
        isFethcingData: state.isFethcingData
    }
}

export default connect(mapStateToProps, {})(SongList);