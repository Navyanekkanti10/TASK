// TeachersPage.js
import React, { useState, useEffect } from 'react';
import { getTeachersDetails } from './api';

const TeachersPage = () => {
  const [teachersDetails, setTeachersDetails] = useState([]);

  useEffect(() => {
    getTeachersDetails()
      .then(response => setTeachersDetails(response))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Teachers Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Year of Joining</th>
            <th>Performance</th>
          </tr>
        </thead>
        <tbody>
          {teachersDetails.map((teacher, index) => (
            <tr key={index}>
              <td>{teacher.name}</td>
              <td>{teacher.id}</td>
              <td>{teacher.department}</td>
              <td>{teacher.yearOfJoining}</td>
              <td>{teacher.performance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersPage;
