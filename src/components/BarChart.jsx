import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const BarChart = ({ title, data }) => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: title,
    },
    xAxis: {
      categories: data.map(item => item.department),
      title: {
        text: 'Department',
      },
    },
    yAxis: {
      title: {
        text: 'Performance',
      },
    },
    series: [
      {
        name: 'Performance',
        data: data.map(item => item.performance),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
