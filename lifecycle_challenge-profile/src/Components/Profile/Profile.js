import React, { Component } from 'react'
import './Profile.css'
import ProfilePicture from '../ProfilePicture/ProfilePicture'
import ProfileDetails from '../ProfileDetails/ProfileDetails'

const ProfileCard = (props) => {
    const { picture } = props.user
    return (
        <div className="repo-item">
            <ProfilePicture src={picture.large} />
            <ProfileDetails user={props.user} />
        </div>
    )
}


class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            history: [],
            index: 0
        }
    }

    count(num){
        
    }

    fetchUser(){
        const url = 'https://randomuser.me/api/'
        fetch(url).then(
            response => response.json()
        ).then((user) => {
            this.setState({ 
                user: user.results[0],
                history: [...this.state.history, user.results[0]],
                index: this.state.history.length - 1
            })
            // console.log(this.state.user)
        })
    }

    previousUser(){
        let index = this.state.index
        console.log(index)
        if(index > 1){
            this.setState({
                user: this.state.history[index],
                index: this.state.index - 1
                // history: this.state.history.splice(index - 1, 1)
            }, console.log(this.state.history.length))
        } 
    }

    // Deprecated
    componentWillMount() {
        console.log('RepoList: willMount')
    }

    // Called once when component finishes mounting
    componentDidMount() {
        console.log('RepoList: didMount')
        // Do our fetch here
        this.fetchUser()
    }

    // Deprecated
    componentWillReceiveProps(nextProps) {
        console.log('RepoList: willReceiveProps')
    }

    // Tell React whether or not to re-render the app-view
    // Returns a boolean: true = update, false = dont update
    shouldComponentUpdate(nextProps, nextState) {
        console.log('RepoList: shouldComponentUpdate')
        return true
    }

    // Apparently unsafe 
    componentWillUpdate() {
        console.log('RepoList: willUpdate')
    }

    // 
    componentDidUpdate(prevProps, prevState) {
        console.log('RepoList: didUpdate')
        if (this.props.user !== prevProps.user) {
            this.fetchRepos()
        }
    }

    // Cleanup - remove event handlers, close DB/network connection, destroy certain objects, remove cookie, update local storage etc
    componentWillUnmount() {

    }

    

   

    render () {
        let showProfile
        if(this.state.user === false) {
            showProfile = <p>Loading...</p>
        } else {
            showProfile = <ProfileCard user={this.state.user} />
        }
        return(
            <div>
                {showProfile}
                <button onClick={this.previousUser.bind(this)}>Previous User</button>
                <button onClick={this.fetchUser.bind(this)}>New User</button>
            </div>
        )
    }
}


export default Profile;