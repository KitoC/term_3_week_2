import React from 'react'

const ProfileDetails = (props) => {
    const {name, email, cell} = props.user
    console.log(name)
    return(
        <div>
            <h3>USER</h3>
            <h3>{name.first} {name.last} </h3>
            <p>{email}</p>
            <p>{cell}</p>     
        </div>
    )
}

export default ProfileDetails