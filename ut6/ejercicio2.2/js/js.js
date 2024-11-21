const ctx = document.getElementById('myChart');

const salarioI1 = 1000;
const salarioI2 = 1000;

const sal1 = [salarioI1];
const sal2 = [salarioI2];

for (let i = 1; i < 10; i++) {
  sal1.push(sal1[i - 1] * 1.03);
}

for (let i = 1; i < 10; i++) {
  sal2.push(sal2[i - 1] + 60);
}

const label =[1, 2, 3, 4, 5, 6, 7, 8, 9,10];

new Chart(ctx, {
    type: 'line',
    data: {
      labels: label,
      datasets: [
        {
          label: 'Dataset 1',
          data: sal1,
          borderColor: 'red',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Dataset 2',
          data: sal2,
          borderColor: 'blue',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }
      ]
    },

    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });