import React from "react";
import styles from "./app.module.css";

class FormElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert(
      'A Form has been Submited with: "' + this.state.value + '" this value'
    );
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Your Name:
          <br />
          <input
            className={styles.inputElement}
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={styles.buttonElement} type="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default FormElement;
