// import React from 'react';
// import api from '../../utils/api';

// const Logout = () => {
//     const handleLogout = async () => {
//         try {
//             // Call the backend logout API
//             await api.post('/logout', {}, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Attach the token
//                 },
//             });

//             // Clear the token from localStorage
//             localStorage.removeItem('authToken');

//             // Redirect to login page
//             window.location.href = '/login';
//         } catch (err) {
//             console.error('Logout failed:', err);
//             alert('Failed to log out. Please try again.');
//         }
//     };

//     return (
//         <button onClick={handleLogout}>
//             Logout
//         </button>
//     );
// };

// export default Logout;
