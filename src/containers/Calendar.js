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
            eventSources: [
                {
                    color: 'blue',
                    textColor: 'yellow',
                    events: [
                        {
                            title  : 'event1',
                            start  : '2018-06-09'
                        },
                        {
                            title  : 'event2',
                            start  : '2018-06-11',
                            end    : '2018-06-15'
                        },
                        {
                            title  : 'event3',
                            start  : '2018-06-19T12:30:00',
                            allDay : false // will make the time show
                        }
                    ]
                },
                {
                    color: 'red',
                    textColor: 'white',
                    events: [
                        {
                            title  : 'event4',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event5',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event6',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event7',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event8',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event9',
                            start  : '2018-06-25'
                        },
                        {
                            title  : 'event10',
                            start  : '2018-06-25'
                        },
                    ]
                },

            ]
        });

    }

    render() {
        return (
            <div id={'calendar'}></div>
        );
    }
}

export default Calendar;
