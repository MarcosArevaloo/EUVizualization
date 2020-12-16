document.addEventListener('DOMContentLoaded', () => {

    Highcharts.chart('c3', {
        chart: {
            type: 'packedbubble',
            height: '100%'
        },
        title: {
            text: 'Has the EU positively impacted its member\'s Economies? '
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name} GDP:</b> ${point.value}'
        },
        
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000000,
                layoutAlgorithm: {
                    splitSeries: false,
                    gravitationalConstant: 0.02
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: '1958',
            data: [{
                name: "Belgium",
                value: 455086
            },
            {
                name: "France",
                value: 2418836
            },
            {
                name: "Germany",
                value: 3363447
            },
            {
                name: "Italy",
                value: 1821597
            },
            {
                name: "Luxembourg",
                value: 57794
            },
            {
                name: "Netherlands",
                value: 750284
            }
            ]
        },  {
            name: '1973',
            data: [{
                name: "Denmark",
                value: 295091
            },
            {
                name: "Ireland",
                value: 283703
            },
            ]
        }, {
            name: '1981',
            data: [{
                name: "Greece",
                value: 194851
            }
            ]
        }, {
            name: '1986',
            data: [{
                name: "Portugal",
                value: 198923
            },
            {
                name: "Spain",
                value: 1199057
            },
            ]
        }, 

       {
            name: '1995',
            data: [{
                name: "Austria",
                value: 376950
            },
            {
                name: "Finland",
                value: 231950
            },
            {
                name: "Sweden",
                value: 495624
            }
            ]
        }, {
            name: '2004',
            data: [{
                name: "Cyprus",
                value: 19560
            },
            {
                name: "Czech Republic",
                value: 185156
            },
            {
                name: "Estonia",
                value: 22459
            },
            {
                name: "Hungary",
                value: 121715
            },
            {
                name: "Latvia",
                value: 27003
            },
            {
                name: "Lithuania",
                value: 41171
            },
            {
                name: "Malta",
                value: 9746
            },
            {
                name: "Poland",
                value: 477066
            }, {
                name: "Slovakia",
                value: 87264
            }, {
                name: "Slovania",
                value: 42775
            }]
        }, 
        {
            name: '2007',
            data: [{
                name: "Bulgaria",
                value: 50199
            },
            {
                name: "Romania",
                value: 177954
            },
            ]
        }
        ]
    });
    
    





})