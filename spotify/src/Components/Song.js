import React from 'react'

const Songs = (props) => {
    return(
        props.songs.map(
            song =>
            <p>{song.artist}, {song.title}</p>
        )
    )
}

export default Songs