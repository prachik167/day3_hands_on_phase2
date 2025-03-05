import React, { useState } from 'react';

const LoginWithProps = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    return (
        <div>
            <h2>Login with Props</h2>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => onLogin(username)}>Login</button>
        </div>
    );
};

export default LoginWithProps;
