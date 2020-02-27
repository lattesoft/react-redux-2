import React, { Component } from 'react'

export default class UserComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    inputHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(){
        console.log(this.state);
    }

    render() {
        return (
            <div>
                This is a User Component
            </div>
        )
    }
}
