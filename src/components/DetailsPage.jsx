import React from 'react';

const DetailsPage = ({ title, details, fields }) => {
  return (
    <div>
      <h2>{title}</h2>
      <table className="table">
        <thead>
          <tr>
            {fields.map(field => (
              <th key={field}>{field}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              {fields.map(field => (
                <td key={field}>{detail[field.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
