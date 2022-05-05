

setInterval(() => {
    
    $.ajax({
        type: "POST",
        url: "chart2.php",
        dataType: "json",
        success: function (data) {
         
            // for (var i in data) {
            //     console.log(data[i].vendas)
            // }
            var temperature = [];
            var dia = []; 

            for (var i = 0; i < data.length; i++) {

                temperature.push(data[i].temperature);;
                dia.push(data[i].dia);;
            }

            grafico(dia,temperature);
            
        }
    });

}, 60000);

$('document').ready(function () {

    $.ajax({
        type: "POST",
        url: "chart2.php",
        dataType: "json",
        success: function (data) {

            // for (var i in data) {
            //     console.log(data[i].vendas)
            // }
            var temperature = [];
            var dia = []; 

            for (var i = 0; i < data.length; i++) {

                temperature.push(data[i].temperature);;
                dia.push(data[i].dia);;
            }

            grafico(dia,temperature);
            
        }
    });

})

function grafico(dia,temperature) {


    var ctx = document.getElementById('humidade').getContext('2d');

    var chart = new Chart(ctx, {

        type: 'line',
        data: {
            labels: dia,


            datasets: [{
                label: 'Dados da Temperatura',
                borderWidth: 5,
                spanGaps: true,
                backgroundColor: '',
                fill: false,
                borderColor: 'rgba(252,147,65,0.5)',
                pointBorderColor: ' rgba(255, 179, 84, 1)',
                pointBackgroundColor: 'rgba(255, 179, 84, 1)',
                pointStyle: 'circle',
                data: temperature,
            }]
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
                        min: 0,
                        max: 50,
                    }
                }]
            },
            title: {
                display: true,
                text: 'O gráfico mostra a temperatura do lugar'
            },
            legend: {
                display: true,
                position:'bottom',
                labels: {
                fontColor: 'rgba(252,147,65,1)',
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
