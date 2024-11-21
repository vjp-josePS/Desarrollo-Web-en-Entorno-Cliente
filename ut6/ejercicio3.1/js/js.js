const ctx = document.getElementById('myChart');

const labels =['Salud', 'Fuerza', 'Mobilidad', 'Tecnica', 'Alcance'];

new Chart(ctx, {
    type: 'radar',
    data: {
        labels: labels,
          datasets: [{
            label: 'Ryu',
            data: [3, 4, 3, 2, 4],
            fill: true,
            backgroundColor: 'rgba(0, 0, 0 , 0.7)',
            borderColor: 'rgb(255, 255, 255)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 255, 255)'
          },
          {
            label: 'Vega',
            data: [1, 3, 5, 3, 3],
            fill: true,
            backgroundColor: 'rgba(255, 0, 0 , 0.7)',
            borderColor: 'rgb(255, 243, 0 )',
            pointBackgroundColor: 'rgb(255, 243, 0 )',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 243, 0)'
          },
          {
            label: 'Zangief',
            data: [5, 5, 0, 1, 2],
            fill: true,
            backgroundColor: 'rgba(255, 0, 0 , 0.7)',
            borderColor: 'rgb(255, 255, 255)',
            pointBackgroundColor: 'rgb(255, 255, 255 )',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 255, 0)'
          }
        ]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });