import React from 'react';
import api from '../utils/api';

const Dashboard = () => {
    // Retrieve the email of the logged-in user from localStorage
    const email = localStorage.getItem('email');
    console.log(email);

    const handleLogout = async () => {
        try {
            // Call the backend logout API
            await api.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Attach the token
                },
            });


            // Clear the token and email from localStorage
            localStorage.removeItem('authToken');
            localStorage.removeItem('email');

            // Redirect to login page
            window.location.href = '/login';
        } catch (err) {
            console.error('Logout failed:', err);
            alert('Failed to log out. Please try again.');
        }
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{email ? `${email} Welcome to the dashboard!` : 'Welcome to the dashboard!'}</p>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;