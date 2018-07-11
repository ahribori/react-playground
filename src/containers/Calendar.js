import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import $ from 'jquery';
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';

const Dialog = styled(({ className, title, show, onSubmit, onClose, handleChange, handleSelect, selectedValue, rangeSelection }) => (
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
            eventSources: [
                {
                    color: 'blue',
                    textColor: 'yellow',
                    events: [
                        {
                            title: 'event1',
                            start: '2018-07-09',
                        },
                        {
                            title: 'event2',
                            start: '2018-07-11',
                            end: '2018-07-15',
                        },
                        {
                            title: 'event3',
                            start: '2018-07-19T12:30:00',
                            allDay: false, // will make the time show
                        },
                    ],
                },
                {
                    color: 'red',
                    textColor: 'white',
                    events: [
                        {
                            title: 'event4',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event5',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event6',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event7',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event8',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event9',
                            start: '2018-07-25',
                        },
                        {
                            title: 'event10',
                            start: '2018-07-25',
                            end: '2018-08-25',
                        },
                    ],
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
                            this.setState({ dialogShow: false });
                        }}
                        onClose={() => {
                            this.setState({ dialogShow: false });
                        }}
                        handleChange={title => {
                            this.setState({ title });
                        }}
                        handleSelect={selected => {
                            this.setState({ selected });
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
