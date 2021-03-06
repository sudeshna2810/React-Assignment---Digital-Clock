import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
    this.intervalId = null; // keeping id of interval so that we can store the Interval and clear the Interval later
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.getTimeString()}</h3>
      </div>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1 * 1000);
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
  }

  getTimeString() {
    const currTime = this.state.time;
    const [hours, minutes, seconds] = [
      currTime.getHours(),
      currTime.getMinutes(),
      currTime.getSeconds(),
    ];

    const amOrPm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = hours > 12 ? hours - 12 : hours;
    const hourString = this.padNumberToTwoDigits(twelveHourFormat);
    const minString = this.padNumberToTwoDigits(minutes);
    const secondString = this.padNumberToTwoDigits(seconds);

    const timeString = `${hourString}:${minString}:${secondString} ${amOrPm}`;
    return timeString;
  }

  padNumberToTwoDigits(num) {
    //   return ((num < 10 ? "0" : "") + num);
    return `${num < 10 ? "0" : ""}${num}`; // using template strings
  }
}

export default App;
