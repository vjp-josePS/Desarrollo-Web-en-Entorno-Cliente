const ctx = document.getElementById('myChart');

const salarioI1 = 1000;
const sal1 = [salarioI1];

for (let i = 1; i < 10; i++) {
  sal1.push(sal1[i - 1] * 1.03);
}

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [{
      label: 'Salario en 10 años',
      data: sal1,
      borderWidth: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});