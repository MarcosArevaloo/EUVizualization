document.addEventListener('DOMContentLoaded', () => {
    
// Instantiate the map
Highcharts.mapChart('c1', {
    chart: {
        map: 'custom/europe',
        borderWidth: 1
    },

    title: {
        text: 'European Union Parliament Seats'
    },

    subtitle: {
        text: 'A map of the European Countries that make up one of the most powertful and globally renowed organizations, the EU, as well as each memebers Parliament Seats'
    
    },
    xAxis: {
        title: {
            text: 'Year Joined'
        },
       
    },

    legend: {
        enabled: false
    },




    

    series: [{
        name: 'Country',
        data: [
            ['at', 18],
            ['be', 21],
            ['bg', 17],
            ['hr', 11],
            ['cy', 6],
            ['cz', 21],
            ['dk', 13],
            ['ee', 6],
            ['fi', 13],
            ['fr', 74],
            ['de', 96],
            ['gr', 21],
            ['hu', 21],
            ['ie', 11],
            ['it', 73],
            ['lv', 8],
            ['lt', 11],
            ['lu', 6],
            ['mt', 6],
            ['nl', 26],
            ['pl', 21],
            ['pt', 21],
            ['ro', 32],
            ['sk', 13],
            ['si', 8],
            ['es', 54],
            ['se', 20]
        ],
        dataLabels: {
            enabled: true,
            color: 'black',
            formatter: function () {
                if (this.point.value) {
                    return this.point.name;
                }
            }
        },
        tooltip: {
            headerFormat: '{point.name} European Parliament Seats of ',
            pointFormat: '{point.name}: {point.value}'
        }

    }]
});



})