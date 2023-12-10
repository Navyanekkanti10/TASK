// Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      
      <ul>
        <li>Teachers</li>
        <li>Students</li>
        <li>Other Employees</li>
      </ul>
    </div>
  );
};

export default Sidebar;
