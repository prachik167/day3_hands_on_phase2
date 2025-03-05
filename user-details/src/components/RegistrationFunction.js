import React, { useState } from 'react';

const RegistrationFunction = () => {
    const [form, setForm] = useState({ name: '', email: '' });

    return (
        <div>
            <h2>Registration (Function)</h2>
            <input type="text" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <p>Name: {form.name}, Email: {form.email}</p>
        </div>
    );
};

export default RegistrationFunction;
