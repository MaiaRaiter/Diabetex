import React, { Component } from "react";
import WebcamBarcodeScanner from "react-webcam-barcode-scanner";
import axios from "axios";

export default class App extends Component {
  state = {
    showCam: false,
    scannedValue: "",
    name: "",
    isValid: "",
    validFrom: "",
    validTo: "",
    errors: [],
  };

  handleScan = (scannedValue) => {
    if (scannedValue) {
      this.setState({ scannedValue });
    }
  };

  handleError = (error) => {
    console.error(error);
  };

  handleClick = () => {
    this.setState({ showCam: !this.state.showCam, scannedValue: "" });
  };

  handleValidate = () => {
    // Realiza la validación del valor escaneado (this.state.scannedValue) aquí.
    // Actualiza los estados isValid, validFrom, validTo y errors según corresponda.
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showCam
            ? "Cerrar cámara"
            : "Abrir cámara"}
        </button>
        {this.state.showCam ? (
          <div>
            <WebcamBarcodeScanner
              onUserMediaError={this.handleError}
              onScan={this.handleScan}
              scannerStyle={{ width: "100%" }}
            />
          </div>
        ) : null}
        <p>Valor escaneado:</p>
        <textarea
          rows="3"
          cols="50"
          value={this.state.scannedValue}
          readOnly
        />
        <p>
          <button
            disabled={!this.state.scannedValue}
            onClick={this.handleValidate}
          >
            Validar
          </button>
        </p>
      </div>
    );
  }
}