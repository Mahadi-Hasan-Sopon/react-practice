import React from "react";

class LifeCycleMethodsDate extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   date: new Date()
    // };

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h1> Hello LifeCycle Method </h1>
        <h2>
          Date: <span>{this.state.date.toLocaleTimeString()}</span>.
        </h2>
      </div>
    );
  }
}

export default LifeCycleMethodsDate;
