import React, { Component } from 'react'

export default class GreetingWithClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello Good Evening {this.props.name}</h1>
            </div>
        )
    }
}
