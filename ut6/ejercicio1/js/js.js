const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['DWES', 'DWEC', 'DIW', 'DAW', 'EIE'],
      datasets: [{
        label: '# of Votes',
        data: [8, 7, 3, 7, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });