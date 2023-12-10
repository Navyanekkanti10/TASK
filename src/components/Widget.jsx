import React from 'react';
import { Link } from 'react-router-dom';

const Widget = ({ title, link }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={link} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Widget;
