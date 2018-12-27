import React, { Component } from 'react';
import Datepicker, { registerLocale } from 'react-datepicker';
// import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';

// registerLocale('ko', ko);
//
// console.log(ko)

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
          // locale={'ko'}
        />
      </div>
    );
  }
}

export default ReactDatepickerExample;
