import React, { Component } from 'react'

export default class CountingWithClass extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 })
    }
    MulCount = () => {
        this.setState({ count: this.state.count * 2 })
    }
    DivCount = () => {
        this.setState({ count: this.state.count / 2 })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
                <button onClick={this.MulCount}>Multiply</button>
                <button onClick={this.DivCount}>Divide</button>
            </div>
        )
    }
}
