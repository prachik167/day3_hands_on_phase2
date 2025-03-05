import React, { Component } from 'react';

class RegistrationClass extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '' };
    }

    render() {
        return (
            <div>
                <h2>Registration (Class)</h2>
                <input type="text" placeholder="Name" onChange={(e) => this.setState({ name: e.target.value })} />
                <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                <p>Name: {this.state.name}, Email: {this.state.email}</p>
            </div>
        );
    }
}

export default RegistrationClass;
