

setInterval(() => {
    
    $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function (data) {
         
            // for (var i in data) {
            //     console.log(data[i].vendas)
            // }
            
            var temperature = [];
            var humidity = [];
            var dia = []; 

            for (var i = 0; i < data.length; i++) {

                temperature.push(data[i].temperature);;
                humidity.push(data[i].humidity);;
                dia.push(data[i].dia);;
            }

            grafico(temperature,dia,humidity);
            
        }
    });

}, 60000);

$('document').ready(function () {

    $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function (data) {

            // for (var i in data) {
            //     console.log(data[i].vendas)
            // }
            var temperature = [];
            var humidity = [];
            var dia = []; 

            for (var i = 0; i < data.length; i++) {

                temperature.push(data[i].temperature);;
                humidity.push(data[i].humidity);;
                dia.push(data[i].dia);;
            }

            grafico(temperature,dia,humidity);
            
        }
    });

})

function grafico(temperature,dia,humidity) {


    var ctx = document.getElementById('humidade').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'bar',
        data: {
            labels: dia,


            datasets: [{
                label: 'Dados da Umidade',
                borderWidth: 2,
                spanGaps: true,
                backgroundColor: 'rgba(0, 172, 255, 0.3)',
                borderColor: 'rgba(0, 172, 255, 0.5)',
                pointBorderColor: 'rgba(0, 48, 255, 0,7)',
                pointBackgroundColor: 'rgba(0, 48, 255, 0,7)',
                pointStyle: 'circle',
                data: humidity,
            },{
            label: 'Dados da Temperatura',
            borderWidth: 2,
            spanGaps: true,
            backgroundColor: 'rgba(210, 0, 191, 0.3)',
            borderColor: 'rgba(210, 0, 191, 0.6)',
            pointBorderColor: ' rgba(255, 179, 84, 1)',
            pointBackgroundColor: 'rgba(255, 179, 84, 1)',
            pointStyle: 'circle',
            data: temperature,

            }
        ]
        },

        options: {
            plugins: {
                // Change options for ALL labels of THIS CHART
                datalabels: {
                    fontSize: 15,
                    color: '#000000',
                    align: 'top',
                    labels: {
                        title: {
                            font: {
    
                                size: 17,
                            }
                        }
                        },
                }
                },
            scales: {
                yAxes: [{
                    ticks: {
                        min: -20,
                        max: 100,
                    }
                }]
            },
            title: {
                display: true,
                text: 'Temperatura e Umidade'
            },
            legend: {
                display: true,
                position:'bottom',
                labels: {
                fontColor: '#000',
                boxWidth: 55,
                fontSize: 15,
                fontFamily: 'sans-serif',
            }
        },
        layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
    }
        }
    });
}