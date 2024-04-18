const chartData = {
    labels: ["Morbi ligula", "Scelerisque", "Praesent maecenas", "Morbi ligula", "Morbi ligula"],
    data: [41, 29, 23, 4, 3],
}

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: "Visitor in %",
                data: chartData.data,
                backgroundColor: ['#b46cc8', '#ec4380', '#eb6903', '#fdd641', '#66f2ae']
            }
        ]
    },
    options: {
        cutout: '80%',
        borderWidth: 5,
        borderColor:'#1a225c',
        borderRadius: 2,
        hoverBorderWidth: 0,
        color: 'red',
        plugins: {
            legend: {
                display: false,
            }
        }
    }

})
