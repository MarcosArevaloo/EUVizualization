document.addEventListener('DOMContentLoaded', () => {


    Highcharts.chart('container', {

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },
        
    
        legend: {
            enabled: false
        },
    
        title: {
            text: 'GDP Per Capita ($) and Population per Country'
        },
    
        subtitle: {
            text: 'Source: '
        },
    
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, Population: {point.x}, GDP Per Capita ($): {point.y}, Parliament Seats: {point.z}.'
            }
        },
    
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Population'
            },
            labels: {
                format: '{value}'
            },
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 65,
                label: {
                    rotation: 0,
                    y: 15,
                    style: {
                        fontStyle: 'italic'
                    },
                    text: ''
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Population'
            }
        },
    
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'GDP Per Capita ($)'
            },
            labels: {
                format: '${value}'
            },
            maxPadding: 0.2,
            plotLines: [{
                color: 'black',
                dashStyle: 'dot',
                width: 2,
                value: 50,
                label: {
                    align: 'right',
                    style: {
                        fontStyle: 'italic'
                    },
                    text: '',
                    x: -10
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Population'
            }
        },
    
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>Population:</th><td>{point.x}</td></tr>' +
                '<tr><th>GDP Per Capita: </th><td>${point.y}</td></tr>' +
                '<tr><th>Parliament Seats:</th><td>{point.z}</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
    
        series: [{
            data: [
                { x: 8576261, y: 43775, z: 18, name: 'AT', country: 'Austria', color: "blue", fillOpacity: 0.3 },
                { x: 11237274, y: 40324, z: 21, name: 'BE', country: 'Belgium',color: "blue" },
                { x: 7202198, y: 6994, z: 17, name: 'BG', country: 'Bulgaria', color: "green" },
                { x: 4225316, y: 11536, z: 11, name: 'HR', country: 'Croatia', color: "green"  },
                { x: 847008, y: 23243, z: 6, name: 'CY', country: 'Cyprus', color: "blue"  },
                { x: 10538275, y: 17548, z: 21, name: 'ES', country: 'Czech Republic', color: "green"  },
                { x: 5659715, y: 51989, z: 13, name: 'DK', country: 'Denmark', color: "green"  },
                { x: 1314870, y: 17119, z: 6, name: 'EE', country: 'Estonia', color: "blue"  },
                { x: 5471753, y: 42311, z: 13, name: 'FI', country: 'Finland' , color: "blue" },
                { x: 66488186, y: 36206, z: 74, name: 'FR', country: 'France' , color: "blue" },
                { x: 81197537, y: 41313, z: 96, name: 'DE', country: 'Germany' , color: "blue" , fillOpacity: 0.3},
                { x: 10858018, y: 18002, z: 21, name: 'EL', country: 'Greece', color: "blue"  },
                { x: 9855571, y: 12364, z: 21, name: 'HU', country: 'Hungary' , color: "green" },
                { x: 4628949, y: 61134, z: 11, name: 'IE', country: 'Ireland', color: "blue"  },
                { x: 60795612, y: 29958, z: 73, name: 'IT', country: 'Italy' , color: "blue" },
                { x: 1986096, y: 13649, z: 8, name: 'LV', country: 'Latvia' , color: "blue" },
                { x: 2921262, y: 14147, z: 11, name: 'LT', country: 'Lithuania' , color: "blue" },
                { x: 562958, y: 101450, z: 6, name: 'LU', country: 'Luxembourg' , color: "blue" },
                { x: 429344, y: 22596, z: 6, name: 'MT', country: 'Malta' , color: "blue" },
                { x: 16900726, y: 44300, z: 26, name: 'NL', country: 'Netherlands', color: "blue"  },
                { x: 38005614, y: 12555, z: 51, name: 'PL', country: 'Poland', color: "green"  },
                { x: 10374822, y: 19222, z: 21, name: 'PT', country: 'Portugal' , color: "blue" },
                { x: 19870647, y: 8973, z: 32, name: 'RO', country: 'Romania', color: "green"  },
                { x: 5421349, y: 16088, z: 13, name: 'SK', country: 'Slovakia', color: "blue"  },
                { x: 2062874, y: 20727, z: 8, name: 'SI', country: 'Slovenia' , color: "blue" },
                { x: 46449565, y: 25832, z: 54, name: 'ES', country: 'Spain' , color: "blue" },
                { x: 9747355, y: 50580, z: 20, name: 'SE', country: 'Sweden', color: "green"  }
            ]
        }]
    
    });
    
    
})

