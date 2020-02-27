import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavComponent extends Component {
    render() {
        return (
            <div>
                <Link to="/login">Login</Link>
                {" "}
                <Link to="/user">User</Link>
            </div>
        )
    }
}
