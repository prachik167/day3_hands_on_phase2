import React, { useRef } from 'react';

const LoginWithRef = ({ onLogin }) => {
    const usernameRef = useRef(null);
    const emailRef = useRef(null);

    return (
        <div>
            <h2>Login with Ref</h2>
            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={emailRef} type="email" placeholder="Email" />
            <button onClick={() => onLogin(usernameRef.current.value, emailRef.current.value)}>Login</button>
        </div>
    );
};

export default LoginWithRef;
