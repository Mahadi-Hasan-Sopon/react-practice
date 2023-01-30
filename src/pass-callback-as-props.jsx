import "./styles.css";
import React from "react";

class PassCallbackasProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

class GetInput extends React.Component {
  render() {
    return (
      <div className="getInput">
        <h3>Get Input</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

class RenderInput extends React.Component {
  render() {
    return (
      <div>
        <h3>Render Input</h3>
        <p className="renderedP">{this.props.input}</p>
      </div>
    );
  }
}

export default PassCallbackasProps;
