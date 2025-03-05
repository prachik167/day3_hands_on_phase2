import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const LoginWithContext = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');

    return (
        <div>
            <h2>Login with Context</h2>
            <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
            <button onClick={() => setUser(username)}>Login</button>
        </div>
    );
};

export default LoginWithContext;
