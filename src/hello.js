import React from "react";

class Checkbox extends React.PureComponent {
  state = { checked: true };
  onChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
  render() {
    return (
      <label>
        <input
          name={this.props.name}
          type="checkbox"
          checked={this.state.checked}
          onChange={this.onChange}
        />{" "}
        Checkbox
      </label>
    );
  }
}

export default class Hello extends React.PureComponent {
  render() {
    return (
      <div>
        <Checkbox name="checkbox" />
      </div>
    );
  }
}
