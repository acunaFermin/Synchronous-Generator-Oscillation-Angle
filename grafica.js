var grap = Highcharts.chart('container', {

    title: {
        text: 'Curva Oscilación'
    },

    subtitle: {
        text: ' By : Seba & Fermin'
    },

    yAxis: {
        title: {
            text: 'Angulo de Oscilación'
        }
    },

    xAxis: {
            categories:test1.ejex
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'Curva',
        data: test1.ejey
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 1500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
