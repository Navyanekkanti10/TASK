import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StudentPerformanceChart = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Student Performance by Department',
    },
    xAxis: {
      categories: ['Department A', 'Department B', 'Department C', 'Department D'],
    },
    yAxis: {
      title: {
        text: 'Performance',
      },
    },
    series: [
      {
        name: 'Performance',
        data: [80, 75, 85, 90], // Example data, replace with your student performance data
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StudentPerformanceChart;
