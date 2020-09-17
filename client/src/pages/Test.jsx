import React, { Component } from "react";
import QrReader from "react-qr-reader";
import "./qrscanner.scss";

export default class Test extends Component {
  state = {
    result: "QR Code를 스캔해주세요.",
  };

  handleScan = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  };
  handleError = (err) => {
    console.error(err);
  };
  render() {
    return (
      <div className="qr-container">
        <QrReader onError={this.handleError} onScan={this.handleScan} />
        <div className="qr-result">
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}
