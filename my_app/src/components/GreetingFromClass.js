import React, { Component } from 'react'

export default class GreetingFromClass extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}</h1>
                <h1>age : {this.props.age}</h1>
            </div>
        )
    }
}
