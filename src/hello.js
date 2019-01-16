import React from "react";
import { stripIndent } from 'common-tags';

export default class Hello extends React.PureComponent {
  state = { log: "" };
  onMouseMove = (e) => {
    this.setState({
      log: stripIndent`
        clientX: ${e.clientX}
        clientY: ${e.clientY}
        pageX: ${e.pageX}
        pageY: ${e.pageY}
        x: ${e.nativeEvent.x}
        y: ${e.nativeEvent.y}
        offsetX: ${e.nativeEvent.offsetX}
        offsetY: ${e.nativeEvent.offsetY}
      `
    })
  }

  render() {
    return (
      <div
        className="playground"
        style={{width: "500px", height: "500px", background: "lightgreen", whiteSpace: "pre"}}
        onMouseMove={this.onMouseMove}>
        {this.state.log}
      </div>
    );
  }
}
