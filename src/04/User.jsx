import React from "react";
import './user.scss'

class User extends React.Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.fetchUser(this.props.userId)
    }

    fetchUser = userId => {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data
                })
            })
    }

    render() {
        if (!this.state.user) {
            return null
        }

        return (
            <div className="user">
                <img
                    src={this.state.user.avatar_url}
                    alt="User Avatar"
                    className="user__avatar"
                />
                <div className="user__info">
                    <span className="user__name">{ this.state.user.name }</span>
                    <span className="user__location">{ this.state.user.location }</span>
                </div>
            </div>
        )
    }
}

export default User