import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Test from './Test';
import ReactToPrint from 'react-to-print';
import './App.css';

class App extends Component {

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
      ;
  }

  render() {
    return (
      <div className="App">

      <h1>This is Dash Board </h1>  
        <div >
          <button onClick={this.printDocument} className="button">Generate PDF</button>
        </div>
        <div id="divToPrint" className="body" >

          <div>< Test ref={el => (this.componentRef = el)} /></div>

          <ReactToPrint
            content={() => this.componentRef}
            trigger={() => {
              return <a href="#">Print this out!</a>;
            }}
          />

        </div>

      </div>
    );
  }
}
export default App;
