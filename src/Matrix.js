import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "#FFF"
    };
  }

  updateColor = newColor => {
    this.setState({
      color: newColor
    });
  };

<<<<<<< HEAD
  getColor = () => this.state.color;

  genRow = vals =>
    vals.map((val, idx) => (
      <Cell key={idx} color={val} getColor={this.getColor} />
    ));

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));
=======
  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )
Ï
>>>>>>> 12310c0d6990a50657546629a4760a5489814984

  render() {
    return (
      <div id="app">
        <ColorSelector updateColor={this.updateColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};
