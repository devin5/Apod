import moment from "moment";
import React, { useState, useEffect } from "react";

/*min ? */
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
// importing button
// import {Button} from 'reactstrap'

import Apod from "./components/Apod";
import {
  isInclusivelyBeforeDay,
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment()
    };
  }

  render() {
    console.log("im date", this.state.date.toISOString().substring(0, 10));

    return (
      <div className="App">
        <Apod date={this.state.date.toISOString().substring(0, 10)} />
        <SingleDatePicker
          numberOfMonths={1}
          isOutsideRange={() => false}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          // isOutsideRange={day => isAfterDay(day, moment()}
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="your_unique_id" // PropTypes.string.isRequired,
        />
      </div>
    );
  }
}

export default App;
