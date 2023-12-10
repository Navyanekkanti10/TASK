import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/teachers" className="nav-link">
              Teachers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/students" className="nav-link">
              Students
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/milestones" className="nav-link">
              Milestones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
