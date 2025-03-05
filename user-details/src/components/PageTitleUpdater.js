import React, { useState, useEffect } from 'react';

const PageTitleUpdater = () => {
    const [title, setTitle] = useState('Default Title');
    const [D, setD] = useState('');

    useEffect(() => {
        document.title = title;
    }, []); // Runs only first time

    useEffect(() => {
        document.title = title;
    }); // Runs on every render

    useEffect(() => {
        document.title = D;
    }, [D]); // Runs when D changes

    return (
        <div>
            <h2>Page Title Updater</h2>
            <input type="text" placeholder="Set Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Set D" onChange={(e) => setD(e.target.value)} />
        </div>
    );
};

export default PageTitleUpdater;