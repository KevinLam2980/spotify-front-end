import React from "react"


import { connect } from "react-redux"

import Suggestion from './Suggestion'

const Suggestions = props => {
    return (
        <div className="suggestions">
            <h2 className="suggestions-header-grn">
                Suggestions:
            </h2>
            <div className="suggestions-render-ax">
                {
                    (
                        !props.hasSuggestions ? (
                            'Like a song and get a suggestion!'
                        ) : (props.suggestions.map(suggestion => {
                        // Return a suggestion component (we need to make this component)   
                       return (
                        <Suggestion
                         key={suggestion.id} 
                         artists={suggestion.artists[0]}
                         album_image={suggestion.album_image}
                         song_name={suggestion.song_name}
                          />
                       )
                    })))
                }       
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        suggestions: state.suggestedSongs,
        hasSuggestions: state.hasSuggestions,
    }
}

export default connect(mapStateToProps, {})(Suggestions);