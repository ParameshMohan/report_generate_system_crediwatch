import React, { Component } from 'react';

import Test from './Test';
import Chart from './BarChart/Chart';
import LineChart from './LineChart/LineChart';

import ReactToPrint from 'react-to-print';
import './App.css';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
const pdfConverter = require("jspdf");

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {
        labels: ['Bangalore', 'Chennai', 'Kovai', 'Mysore', 'Salem'],
        datasets: [
          {
            label: 'Population',
            data: [
              10, 50, 80, 30, 5
            ],
            backgroundColor: [
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 208, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',


            ]
          }
        ]
      }
    }
  }
  // printDocument() {
  //   const input = document.getElementById('divToPrint');
  //   html2canvas(input)
  //     .then((canvas) => {
  //       const imgData = canvas.toDataURL('image/png');
  //       const pdf = new jsPDF();
  //       pdf.addImage(imgData, 'JPEG', 0, 0);
  //       // pdf.output('dataurlnewwindow');
  //       pdf.save("download.pdf");
  //     })
  //     ;
  // }

  div2PDF = e => {

    const but = e.target;
    
    let input = window.document.getElementsByClassName("div2PDF")[0];

    html2canvas(input).then(canvas => {
      const img = canvas.toDataURL("image/png");
      const pdf = new pdfConverter("l", "pt");
      pdf.addImage(
        img,
        "png",
        input.offsetLeft,
        input.offsetTop,
        1200,
        400
      );
      pdf.save("chart.pdf");
      
    });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ position:'relative', right:'300px'}}>This is Dash Board </h1>
        <div style={{ position: 'relative', right: '300px' }}>
          <button onClick={(e) => this.div2PDF(e)} className="button" >Generate PDF</button>
          <div>
            <ReactToPrint
              content={() => this.componentRef}
              trigger={() => {
                return <a href="#">Print this out!</a>;
              }}
            />
          </div>
        </div>
        <div className="div2PDF" ref={el => (this.componentRef = el)} style={{ textAlign: 'center' }}>
          <div style={{ width: '30%', display: 'flex', height: '200px', margin: '0 0 0 200px', padding: '0px 0px 5px 10px' }}>
            <Chart chartData={this.state.chartData} />
          </div>

          <div style={{ width: '30%', display: 'flex', height: '200px', margin: '0 0 0 200px ', padding: '50px 10px 10px 10px' }}>
            <LineChart chartData={this.state.chartData} />
          </div>

        </div>



      </div>
    );
  }
}
export default App;
