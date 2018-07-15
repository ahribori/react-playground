import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';

const vacations = {
    'daniel.hs': [
        {
            title: 'daniel.hs',
            start: '2018-07-08',
            type: 'a',
        },
        {
            title: 'daniel.hs',
            start: '2018-07-09',
            type: 'a',
        },
        {
            title: 'daniel.hs',
            start: '2018-07-10',
            type: 'a',
        },
        {
            title: 'daniel.hs',
            start: '2018-07-11',
            type: 'a',
        },
    ],
    'derek.c': [
        {
            title: 'derek.c',
            start: '2018-07-18',
            type: 'a',
        },
        {
            title: 'derek.c',
            start: '2018-07-19',
            type: 'b',
        },
        {
            title: 'derek.c',
            start: '2018-07-20',
            type: 'a',
        },
    ],
};

let events = [];

const buildEvents = () => {
    Object.keys(vacations).forEach(key => {
        const myVacation = vacations[key];
        const myNewVacation = [];
        let prev = null;
        for (let i = 0, length = myVacation.length; i < length; i++) {
            if (!prev) {
                myNewVacation.push(myVacation[i])
            } else {
                if (new Date(myVacation[i].start) - new Date(prev.start) === 86400000) {
                    myNewVacation[myNewVacation.length - 1].end = moment(myVacation[i].start).add(9, 'hours');
                }
            }
            prev = myVacation[i];
        }
        vacations[key] = myNewVacation;
        events = events.concat(myNewVacation);
    });
    console.log(events)
};

buildEvents();


const Dialog = styled(({className, title, show, onSubmit, onClose, handleChange, handleSelect, selectedValue, rangeSelection}) => (
    <div className={className}>
        <div className="dialog">
            <input
                type="text"
                value={title}
                onChange={e => {
                    handleChange(e.target.value);
                }}
            />
            <div>
                <label>휴가</label>
                <input name={'type'}
                       type={'radio'}
                       value={'휴가'}
                       checked={selectedValue === '휴가'}
                       onChange={e => {
                           handleSelect(e.target.value);
                       }}
                />
            </div>
            {!rangeSelection &&
            (
                <div>
                    <div>
                        <label>반차</label>
                        <input name={'type'}
                               type={'radio'}
                               value={'반차'}
                               checked={selectedValue === '반차'}
                               onChange={e => {
                                   handleSelect(e.target.value);
                               }}
                        />
                    </div>
                    <div>
                        <label>반반차</label>
                        <input name={'type'}
                               type={'radio'}
                               value={'반반차'}
                               checked={selectedValue === '반반차'}
                               onChange={e => {
                                   handleSelect(e.target.value);
                               }}
                        />
                    </div>
                </div>
            )
            }


            <button onClick={onSubmit}>등록</button>
            <button onClick={onClose}>닫기</button>
        </div>
    </div>
))`
  display: ${ props => props.show ? 'flex' : 'none' }
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 100;
  & .dialog {
    position: relative;
    padding: 20px;
    background-color: white;
    box-shadow: #222222 1px 1px 4px;
    width: 400px;
    height: 400px;
  }
`;

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogShow: false,
            title: '',
            selected: '휴가',
            start: null,
            end: null,
            rangeSelection: false,
        };
    }

    addEvent = (title, selected, start, end) => {
        $('#calendar').fullCalendar('renderEvent', {
            title: `${selected} - ${title}`,
            start,
            end,
        });
    };

    componentDidMount() {
        const $calendar = $('#calendar');

        $calendar.fullCalendar({
            height: () => {
                return window.innerHeight - 30;
            },
            windowResize: () => {
                $calendar.fullCalendar('option', 'height', window.innerHeight - 30);
            },
            windowResizeDelay: 0,
            selectable: true,
            select: (start, end, event, view) => {
                const diff = end - start;
                if (diff > 86400000) {
                    this.setState({
                        dialogShow: true,
                        title: '',
                        start,
                        end,
                        rangeSelection: true,
                    });
                } else {
                    this.setState({
                        dialogShow: true,
                        title: '',
                        start,
                        end,
                    });
                }
            },
            navLinks: true,
            navLinkDayClick: (date, jsEvent) => {
                $calendar.fullCalendar('clientEvents', function (event) {
                    if (!event.end) {
                        if (date <= event.start && moment(date).add(1, 'd') > event.start) {
                            console.log(event);
                        }
                    } else {
                        if (date >= event.start && date < event.end) {
                            console.log(event);
                        }
                    }
                });
            },
            eventSources: [
                {
                    color: 'blue',
                    textColor: 'yellow',
                    events: events,
                },
            ],
        });

    }

    render() {
        return (
            <div>
                {ReactDom.createPortal(
                    <Dialog
                        show={this.state.dialogShow}
                        onSubmit={() => {
                            this.addEvent(this.state.title, this.state.selected, this.state.start, this.state.end);
                            this.setState({dialogShow: false});
                        }}
                        onClose={() => {
                            this.setState({dialogShow: false});
                        }}
                        handleChange={title => {
                            this.setState({title});
                        }}
                        handleSelect={selected => {
                            this.setState({selected});
                        }}
                        selectedValue={this.state.selected}
                        title={this.state.title}
                        rangeSelection={this.state.rangeSelection}
                    />
                    , document.body)}
                <div id={'calendar'}/>
            </div>
        );
    }
}

export default Calendar;
