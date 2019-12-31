
import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartBox } from '../styled'

const App = () => {
  const data = {
    labels  : ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label                    : 'Patients',
        fill                     : false,
        lineTension              : 0.1,
        backgroundColor          : 'rgba(75,192,192,0.4)',
        borderColor              : 'rgba(75,192,192,1)',
        borderCapStyle           : 'butt',
        borderDash               : [],
        borderDashOffset         : 0.0,
        borderJoinStyle          : 'miter',
        pointBorderColor         : 'rgba(75,192,192,1)',
        pointBackgroundColor     : '#fff',
        pointBorderWidth         : 1,
        pointHoverRadius         : 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor    : 'rgba(220,220,220,1)',
        pointHoverBorderWidth    : 2,
        pointRadius              : 1,
        pointHitRadius           : 10,
        data                     : [650, 609, 800, 810, 660, 750, 1000]
      }
    ]
  };
  return (
    <ChartBox>
      <div ><Line data={data} options={{ maintainAspectRatio: true }} /></div>
      
    </ChartBox>
  );
};

export default App;
