import React, { Component } from 'react'
import NavComponent from '../components/NavComponent';

export default class LayoutContainer extends Component {
    render() {
        return (
            <div>
                <NavComponent/>
                Hello This is a layout
                <hr/>
                {this.props.children}
                <hr/>
                this is a footer
            </div>
        )
    }
}
