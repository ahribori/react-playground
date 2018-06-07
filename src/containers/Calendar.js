import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const $calendar = $('#calendar');
        $calendar.fullCalendar({
            height: $(window).height() * 0.83,
            windowResize: () => {
                $calendar.fullCalendar('option', 'height', $(window).height() * 0.83);
            },
        });

    }

    render() {
        return (
            <div id={'calendar'}></div>
        );
    }
}

export default Calendar;
