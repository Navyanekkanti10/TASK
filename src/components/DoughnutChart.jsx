import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DoughnutChart = ({ title, data }) => {
  const options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: title,
    },
    series: [
      {
        name: title,
        data: data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default DoughnutChart;
