import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ReactDatepickerExample extends Component {
  state = {
    date: new Date(),
  };

  handleChange = selectedDate => {
    console.log(selectedDate)
    this.setState({ date: selectedDate });
  };
  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>React Datepicker Example</h1>
        <Datepicker
          dropdownMode={'scroll'}
          onChange={this.handleChange}
          selected={date}
        />
      </div>
    );
  }
}

export default ReactDatepickerExample;
