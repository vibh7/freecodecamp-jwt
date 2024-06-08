import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-gray-800 text-white py-4 flex justify-between items-center px-4">
        <div className="text-xl font-bold">freeCodeCamp (A)</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search 8,000+ tutorials"
            className="px-2 py-1 rounded"
          />
          <button className="bg-gray-700 px-4 py-2 rounded">Menu</button>
          <Link to="/signin" className="bg-yellow-500 px-4 py-2 rounded">Sign In</Link>
        </div>
      </header>
      <main className="flex flex-col items-center mt-8 px-4 text-center">
        <h1 className="text-3xl font-bold">Learn to code — for free.</h1>
        <h2 className="text-2xl font-bold mt-2">Build projects.</h2>
        <h2 className="text-2xl font-bold mt-2">Earn certifications.</h2>
        <p className="mt-4 text-gray-700 max-w-2xl">
          Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:
        </p>
        <div className="flex space-x-4 mt-4">
          <img src="https://via.placeholder.com/100x50" alt="Google" />
          <img src="https://via.placeholder.com/100x50" alt="Apple" />
          <img src="https://via.placeholder.com/100x50" alt="Microsoft" />
          <img src="https://via.placeholder.com/100x50" alt="Spotify" />
          <img src="https://via.placeholder.com/100x50" alt="Amazon" />
        </div><br></br>
        <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Get started (it's free)
      </Link>
      </main>

    </div>
  );
};

export default HomePage;