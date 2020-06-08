import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import '../Chart.css'
class LineChart extends Component {

    render() {
        return (
            <div className="chart">
                Line Chart
                <Line
                    data={this.props.chartData}

                    options={{
                        title: {
                            display: true,
                            text: 'Big Cities in South India',
                            fontSize: 15
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }}
                />

            </div >
        );
    }
}
export default LineChart;