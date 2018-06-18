import React, { Component } from 'react';
// import Input from './input.js'

const Modal = (props) => {
    return (
        <div className="Modal">
            <form onSubmit={props.onSubmit} className="Modalform">
                <input name="title" type="text" placeholder="Song Title"  />
                <input name="artist" type="text" placeholder="Artist Name"  />
                <button>
                    Add new song 
                </button>
            </form>

        </div>

    )
}
export default Modal