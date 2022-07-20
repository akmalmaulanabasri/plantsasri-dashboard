var xValues = ["January","February","March","April","May","June","July"];
var yValues = [65,59,80,83,57,50,40];


new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: "My First dataset",
      fill: false,
      tension: 0.15,
      backgroundColor: "#4BC0C0",
      borderColor: "#4BC0C0",
      pointRadius : 2,
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 40, max:85}}],
    }
  }
});

new Chart("doughnutChart", {
    type: "doughnut",
    data: {
      datasets: [{
        backgroundColor: [
            '#FFA117',
            '#FFD816'
          ],
        pointRadius : 2,
        data: [63, 37],
      }]
    },
    options: {
      legend: {display: true},
    }
  });

  $(document).ready(function () {
    $('#tabelTransaksi').DataTable({
      pageLength : 4,
      lengthMenu: [[4, 8, 12, -1], [4, 8, 12, "All"]],
      ordering : false,
      bInfo : false,
    });
});