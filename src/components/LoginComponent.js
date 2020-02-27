import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setNumber, setUsername} from '../redux/actions/userActions';

class LoginComponent extends Component {
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
        this.props.setUsername(this.state.username);
    }

    render() {
        return (
            <div>
                <div>
                <p>Text: {this.props.user.text}</p>
                <p>Number: {this.props.user.number}<button onClick={this.props.setNumber}>+</button></p>
                </div>
                
                <input onChange={this.inputHandler} type="text" name="username"/>
                <input onChange={this.inputHandler} type="password" name="password"/>
                <button onClick={this.onSubmit}>Login</button>
            </div>
        )
    }
}
// export default connect((a)=>{
//     return {
//         user: a.user,
//         product: a.product
//     }
// } ,{setNumber, setUsername})(LoginComponent);

export default connect(({user,product})=>{
    return {
        user: user,
        product: product
    }
} ,{setNumber, setUsername})(LoginComponent);
