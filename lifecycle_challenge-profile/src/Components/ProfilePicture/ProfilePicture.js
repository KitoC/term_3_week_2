import React from 'react'

const ProfilePicture = (props) => {
    return(
        <div className="profile-pic">
            <img src={props.src} className="App-logo" alt="logo" />
        </div>
    )
}

export default ProfilePicture
