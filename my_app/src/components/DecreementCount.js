import React, { Component } from 'react'

export default class CountingWithClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    DecrementCount = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.DecrementCount}>Decrement</button>
            </div>
        )
    }
}
