import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GraduationRateChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Graduation Rate',
    },
    series: [
      {
        name: 'Graduation Rate',
        data: [
          { name: 'Graduated', y: 80 }, // Example data, replace with your graduation rate data
          { name: 'Not Graduated', y: 20 },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GraduationRateChart;
