import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 text-lg hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
