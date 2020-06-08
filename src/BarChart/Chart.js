import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import '../Chart.css'
class Chart extends Component {

    render() {
        return (
            <div className="chart">
                Bar Chart
                <Bar
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
export default Chart;