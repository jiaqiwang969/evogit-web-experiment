import React from 'react';

function NavigationBar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">EvoX</div>
        <div className="flex space-x-4">
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#docs" className="hover:text-blue-500">Docs</a>
          <a href="#github" className="hover:text-blue-500">GitHub</a>
          <a href="#install" className="hover:text-blue-500">Install</a>
          <a href="#community" className="hover:text-blue-500">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
