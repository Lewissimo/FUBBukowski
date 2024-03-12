import React from 'react'
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
const Statistic = () => {
    const data = {
        labels: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        datasets: [
          {
            label: 'Wejścia na stronę macOS',
            backgroundColor: 'rgba(0,0,0,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Wejścia na stronę windows',
            backgroundColor: 'rgba(118, 44, 44, 0.991)',
            borderColor: 'rgba(118, 44, 44, 0.991)',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [25, 29, 2, 3, 23, 12, 45]
          },
          {
            label: 'Wejścia na stronę IOS',
            backgroundColor: 'rgba(84, 68, 68, 0.991)',
            borderColor: 'rgba(84, 68, 68, 0.991)',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [45, 59, 40, 31, 7, 55, 30]
          },
          {
            label: 'Wejścia na stronę Android',
            backgroundColor: 'rgba(99, 0, 0, 0.991)',
            borderColor: 'rgba(99, 0, 0, 0.991)',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [3, 34, 56, 31, 16, 15, 20]
          },
          
        ]
      };
      const options = {
        maintainAspectRatio: false
      };
      
  return (
    <div className='Statistic'>
            <Line data={data} options={options} className='chart' />
    </div>
  )
}

export default Statistic