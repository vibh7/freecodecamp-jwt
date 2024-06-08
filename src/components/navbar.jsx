import React from 'react';

const Navbar = () => {
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">FreeCodeCamp Clone</h1>
        <div>
          {!token ? (
            <>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => window.location.href='/login'}>Login</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.location.href='/signin'}>Sign In</button>
            </>
          ) : (
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
