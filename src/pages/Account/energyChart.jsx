import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EnergyChart = ({ data, groupBy }) => {
    // Função para agrupar os dados por mês ou ano
    const groupData = (data, groupBy) => {
        return data.reduce((acc, entry) => {
            const date = new Date(entry.date);
            let key;

            if (groupBy === 'month') {
                // Agrupar por mês (abreviado)
                key = date.toLocaleString('default', { month: 'short' });
            } else if (groupBy === 'year') {
                // Agrupar por ano
                key = date.getFullYear().toString();
            }

            if (!acc[key]) {
                acc[key] = 0;
            }

            acc[key] += entry.energy;
            return acc;
        }, {});
    };

    // Agrupando os dados conforme a propriedade `groupBy`
    const groupedData = groupData(data, groupBy);

    // Organizando as categorias (eixo X) e os dados de consumo de energia (eixo Y)
    const categories = Object.keys(groupedData);
    const energyConsumption = Object.values(groupedData);

    const chartOptions = {
        chart: {
            type: 'line',
            backgroundColor: 'transparent',
            zoomType: 'x',
        },
        title: {
            text: ``,
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '18px',
            },
        },
        xAxis: {
            categories: categories,
            title: {
                text: groupBy === 'month' ? 'Meses' : 'Anos',
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
                text: 'Consumo (kWh)',
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
            valueSuffix: ' kWh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderColor: '#444',
            style: {
                color: '#fff',
            },
        },
        series: [
            {
                name: 'Consumo de Energia',
                data: energyConsumption,
                color: '#ff5733',
                lineWidth: 3,
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#ff5733',
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
        <div className="">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default EnergyChart;
