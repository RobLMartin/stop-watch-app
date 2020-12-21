import { useState, Component } from "react";
import Stopwatch from "./components/stopwatch";
import Controls from "./components/controls";

import "./App.css";

class App extends Component {
  state = {
    on: false,
    start: 0,
    current: 0,
  };

  startTimer = () => {
    const { current, start } = this.state;

    this.setState({
      on: true,
      current: current,
      start: Date.now() - current,
    });

    this.timer = setInterval(() => {
      this.setState({ current: Date.now() - start });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ on: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({ start: 0, current: 0 });
  };

  render() {
    const { on, current } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Stopwatch time={current} />
          <Controls
            isOn={on}
            time={current}
            onStart={this.startTimer}
            onStop={this.stopTimer}
            onReset={this.resetTimer}
          />
        </header>
      </div>
    );
  }
}

export default App;
