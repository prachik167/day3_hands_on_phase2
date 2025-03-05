import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Welcome = ({ username }) => {
    const userContext = useContext(UserContext);
    return <h2>Welcome, {username || userContext.user}!</h2>;
};

export default Welcome;
