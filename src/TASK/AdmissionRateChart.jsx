import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AdmissionRateChart = () => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Admission Rate',
    },
    series: [
      {
        name: 'Admission Rate',
        data: [
          { name: 'Admitted', y: 70 }, // Example data, replace with your admission rate data
          { name: 'Not Admitted', y: 30 },
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

export default AdmissionRateChart;
