import React, {Component} from 'react'

const RepoItem = (props) => {
    const {name, description, html_url} = props.repo
    return (
        <div className="repo-item">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={html_url} target="_blank">
                <small>{html_url}</small>
            </a>
        </div>
    )
}

class RepoList extends Component{
    constructor(props){
        super(props);
        console.log('RepoList: constructor')

        this.state = {
            repos: []
        }
    }

    fetchRepos = () => {
        const url = `https://api.github.com/users/${this.props.user}/repos`
        fetch(url).then(
            response => response.json()
        ).then((repos) => {
            this.setState({ repos: repos })

        })
    }

    // Deprecated
    componentWillMount(){
        console.log('RepoList: willMount')
    }

    // Called once when component finishes mounting
    componentDidMount(){
        console.log('RepoList: didMount')
        // Do our fetch here
        this.fetchRepos()
    }

    // Deprecated
    componentWillReceiveProps(nextProps){
        console.log('RepoList: willReceiveProps')
    }

    // Tell React whether or not to re-render the app-view
    // Returns a boolean: true = update, false = dont update
    shouldComponentUpdate(nextProps, nextState){
        console.log('RepoList: shouldComponentUpdate')
        return true
    }

    // Apparently unsafe 
    componentWillUpdate(){
        console.log('RepoList: willUpdate')
    }

    // 
    componentDidUpdate(prevProps, prevState){
        console.log('RepoList: didUpdate')
        if(this.props.user !== prevProps.user){
            this.fetchRepos()
        }
    }
    
    // Cleanup - remove event handlers, close DB/network connection, destroy certain objects, remove cookie, update local storage etc
    componentWillUnmount(){

    }

    render(){
        console.log('RepoList: render')
        console.log(this.state.repos)
        return(
            <div>
                <h2>Repo list for user '{this.props.user}'</h2>
                {
                    this.state.repos.map((repo) => {
                        return(
                            <RepoItem key={repo.id} repo={repo} />
                        )
                    })
                }
            </div>
        )
    }
}

export default RepoList;