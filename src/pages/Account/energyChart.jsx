import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EnergyChart = ({ data, titulo, cor }) => {
    
    const categories = data.map(item => item.mes); 
    const values = data.map(item => item.valor);    
    const chartOptions = {
        chart: {
            type: 'line', 
            backgroundColor: 'transparent',
            zoomType: 'x', 
        },
        title: {
            text: '',
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
            },
        },
        xAxis: {
            categories: categories,  
            title: {
                text: 'Meses',
                style: {
                    color: '#fff',
                },
            },
            labels: {
                style: {
                    color: '#ccc',
                },
            },
        },
        yAxis: {
            title: {
                text: titulo,
                style: {
                    color: '#fff',
                },
            },
            labels: {
                style: {
                    color: '#ccc',
                },
            },
        },
        tooltip: {
            shared: true,
            valueSuffix: ' pontos',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderColor: '#444',
            style: {
                color: '#fff',
            },
        },
        series: [
            {
                name: 'Pontos Ganhos',
                data: values,  
                color: cor,
                lineWidth: 3,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: cor,
                    lineWidth: 2,
                    lineColor: '#fff',
                },
            },
        ],
        legend: {
            enabled: false,
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    color: '#fff',
                },
                enableMouseTracking: true,
            },
        },
    };

    return (
        <div className='w-full'>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default EnergyChart;
