import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            newTask: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    handleInputChange(event) {
        this.setState({ newTask: event.target.value });
    }

    addTask() {
        const { tasks, newTask } = this.state;
        if (newTask.trim() !== '') {
            this.setState({
                tasks: [...tasks, newTask],
                newTask: ''
            });
        }
    }

    deleteTask(index) {
        const { tasks } = this.state;
        this.setState({
            tasks: tasks.filter((_, i) => i !== index)
        });
    }

    render() {
        const { tasks, newTask } = this.state;

        return (
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <h1>Simple To-Do List</h1>
                <div>
                    <input
                        type="text"
                        value={newTask}
                        onChange={this.handleInputChange}
                        placeholder="Add a new task"
                        style={{
                            padding: '10px',
                            width: '80%',
                            marginRight: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                    <button
                        onClick={this.addTask}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Add Task
                    </button>
                </div>
                <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '10px',
                                borderBottom: '1px solid #ccc'
                            }}
                        >
                            {task}
                            <button
                                onClick={() => this.deleteTask(index)}
                                style={{
                                    padding: '5px 10px',
                                    backgroundColor: '#dc3545',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
