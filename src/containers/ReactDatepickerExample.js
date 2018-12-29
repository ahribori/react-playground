import React, { Component } from 'react';

/**
 * React Datepicker
 */
import Datepicker, { registerLocale } from 'react-datepicker';
// import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';

// registerLocale('ko', ko);
//
// console.log(ko)

/**
 * React Day Picker
 */
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

/**
 * React Datetime
 */
import ReactDatetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import 'moment/locale/ko';

const MONTHS = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];
const WEEKDAYS_LONG = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];
const WEEKDAYS_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

class ReactDatepickerExample extends Component {
  state = {
    date: new Date(),
  };

  handleChange = selectedDate => {
    console.log(selectedDate);
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

        <h1>React Day Picker Example</h1>
        <DayPickerInput
          onDayChange={this.handleChange}
          value={date}
          dayPickerProps={{
            months: MONTHS,
            weekdaysLong: WEEKDAYS_LONG,
            weekdaysShort: WEEKDAYS_SHORT,
          }}
        />

        <h1>React Datetime</h1>
        <ReactDatetime
          defaultValue={date}
          closeOnSelect={true}
          locale="ko"
          viewMode='days'
        />
      </div>
    );
  }
}

export default ReactDatepickerExample;
