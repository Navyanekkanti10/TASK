
import React from 'react'
import { Link } from 'react-router-dom'
import './Widget.css';

export const Widgets = () => {
    return (
        <div>
        <nav style={{listStyle:"none",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}} >
          <ul style={{listStyle:"none"}}>
            <li  >
              <Link  to="/events" style={{textDecoration: 'none'}}>Events</Link>
            </li>
            <li>
              <Link to="/teachers" style={{textDecoration: 'none'}}>Teachers</Link>
            </li>
            <li>
              <Link to="/students" style={{textDecoration: 'none'}}>Students</Link>
            </li>
            <li>
              <Link to="/milestones" style={{textDecoration: 'none'}}>Milestones</Link>
            </li>
          </ul>
  </nav>
  </div>
    )
}