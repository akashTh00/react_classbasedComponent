import "./styles.css";
import React from "react";
import Name from "./Component/Name";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };

    this.increment = this.increment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  increment() {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    return (
      <div className="app">
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p> {this.state.name} </p>
        <Name />
      </div>
    );
  }
}
export default App;
