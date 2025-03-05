import React, { useState } from 'react';
import { UserProvider } from './context/UserContext';
import LoginWithProps from './components/LoginWithProps';
import LoginWithContext from './components/LoginWithContext';
import Welcome from './components/Welcome';
import RegistrationClass from './components/RegistrationClass';
import RegistrationFunction from './components/RegistrationFunction';
import LoginWithRef from './components/LoginWithRef';
import PageTitleUpdater from './components/PageTitleUpdater';

const App = () => {
    const [username, setUsername] = useState('');
    const [loginDetails, setLoginDetails] = useState({ username: '', email: '' });

    return (
        <UserProvider>
            <div>
                <LoginWithProps onLogin={setUsername} />
                <LoginWithContext />
                <Welcome username={username} />
                <RegistrationClass />
                <RegistrationFunction />
                <LoginWithRef onLogin={(username, email) => setLoginDetails({ username, email })} />
                <Welcome username={`${loginDetails.username} (${loginDetails.email})`} />
                <PageTitleUpdater />
            </div>
        </UserProvider>
    );
};

export default App;
