import React, { Component } from 'react';

export default class ChangeTextCaseWithTheme extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            theme: 'light' // Default theme
        };
        this.handleChange = this.handleChange.bind(this);
        this.changeTextToLowerCase = this.changeTextToLowerCase.bind(this);
        this.changeTextToUpperCase = this.changeTextToUpperCase.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    changeTextToLowerCase() {
        this.setState({ text: this.state.text.toLowerCase() });
    }

    changeTextToUpperCase() {
        this.setState({ text: this.state.text.toUpperCase() });
    }

    toggleTheme() {
        this.setState((prevState) => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    }

    render() {
        const { text, theme } = this.state;

        // Theme-specific styles
        const appStyle = {
            backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
            color: theme === 'light' ? '#000' : '#fff',
            minHeight: '100vh',
            padding: '20px',
            transition: 'all 0.3s ease-in-out'
        };

        const buttonStyle = {
            backgroundColor: theme === 'light' ? '#007bff' : '#444',
            color: theme === 'light' ? '#fff' : '#ddd',
            border: 'none',
            padding: '10px 20px',
            margin: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out'
        };

        const textareaStyle = {
            width: '100%',
            height: '100px',
            margin: '10px 0',
            padding: '10px',
            backgroundColor: theme === 'light' ? '#fff' : '#444',
            color: theme === 'light' ? '#000' : '#fff',
            border: `1px solid ${theme === 'light' ? '#ccc' : '#555'}`,
            borderRadius: '5px'
        };

        return (
            <div style={appStyle}>
                <textarea
                    value={text}
                    onChange={this.handleChange}
                    placeholder="Write Your Text Here..."
                    style={textareaStyle}
                ></textarea>
                <div>
                    <button onClick={this.changeTextToLowerCase} style={buttonStyle}>
                        Change to Lowercase
                    </button>
                    <button onClick={this.changeTextToUpperCase} style={buttonStyle}>
                        Change to Uppercase
                    </button>
                    <button onClick={this.toggleTheme} style={buttonStyle}>
                        Toggle Theme
                    </button>
                </div>
            </div>
        );
    }
}
