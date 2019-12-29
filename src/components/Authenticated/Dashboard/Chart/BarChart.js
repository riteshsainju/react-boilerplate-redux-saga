
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartBox } from '../styled'

const App = () => {
  const data = {
    labels  : ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label          : 'Patients',
        fill           : true,
        backgroundColor: '#469097',
        data           : [650, 609, 800, 810, 660, 750, 1000]
      }
    ]
  };
  return (
    <ChartBox>
      <div><Bar
        data={data}
        options={{ maintainAspectRatio: true,scales             : {
          xAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                color: 'rgba(0, 0, 0, 0)',
              },

            // display: false, // this will remove only the label
            },
          ],
        }, }} /></div>
      
    </ChartBox>
  );
};

export default App;
