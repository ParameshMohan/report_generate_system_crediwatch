import React, { Component } from 'react';
import Image1 from './image/graph2.jpg';
import Image2 from './image/graph3.png';
import Chart from './BarChart/Chart';


class Test extends Component {
    render() {
        return (<div>
            <div >
                {/* <h4>this is Graph1</h4>
                <img src={Image1} />
                <h4>this is Graph2</h4>
                <img src={Image2} /> */}
                <Chart />
            </div>

            </div >
        );
    }
}
export default Test;