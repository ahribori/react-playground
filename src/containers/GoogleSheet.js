import React from 'react';
import Script from 'react-load-script';
import styled from 'styled-components';
import $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

class GoogleSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            auth: false,
            pending: true,
        };
    }

    initClient = () => {
        window.gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
        }).then(() => {
            // Listen for sign-in state changes.
            window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

            // Handle the initial sign-in state.
            this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
            document.getElementById('authorize-button').onclick = this.handleAuthClick;
            document.getElementById('signout-button').onclick = this.handleSignoutClick;
        });
    };

    updateSigninStatus = (isSignedIn) => {
        const authorizeButton = document.getElementById('authorize-button');
        const signoutButton = document.getElementById('signout-button');
        if (isSignedIn) {
            authorizeButton.style.display = 'none';
            signoutButton.style.display = 'block';
            this.getSheet();
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
        }
    };

    getSheet = () => {
        window.gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1bAR5Dh3QWiXDYB0_gaTBDTd6WkutBKO3Q5VVb5W0WGA',
            range: '시트2',
        }).then((response) => {
            const { values } = response.result;
            this.setState({ data: values, pending: false, auth: true }, this.renderCalendar);
        }, (error) => {
            this.setState({ pending: false });
            console.error(error.result.error.message);
        });
    };


    updateCell = () => {
        window.gapi.client.sheets.spreadsheets.values.update({
            spreadsheetId: '1bAR5Dh3QWiXDYB0_gaTBDTd6WkutBKO3Q5VVb5W0WGA',
            range: '시트1!A6',
            valueInputOption: 'USER_ENTERED',
        },{
            "range": '시트1!A6',
            "majorDimension": 'COLUMNS',
            "values": [
                [1]
            ]
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.error(error.result.error.message);
        });
    };

    handleAuthClick = () => {
        window.gapi.auth2.getAuthInstance().signIn();
    };

    handleSignoutClick = () => {
        window.gapi.auth2.getAuthInstance().signOut();
    };

    onScriptLoad = () => {
        window.gapi.load('client:auth2', this.initClient);
    };

    onScriptError = () => {
    };

    renderSheet = () => {
        if (!this.state.data) {
            return null;
        } else {
            return this.state.data.map(row => {
                return (
                    <div key={row}>
                        {!Array.isArray(row) ? (<span className={this.props.className}>{row}</span>) : row.map(col => {
                            return <span key={col} className={this.props.className} style={{ marginRight: 50 }}>{col}</span>;
                        })}
                    </div>
                );
            });
        }
    };

    renderCalendar = () => {
        if (!this.state.data || !this.state.auth) {
            return null;
        } else {
            const $calendar = $('#calendar');
            const eventSources = [
                {
                    color: '#673AB7',
                    textColor: 'white',
                    events: []
                },
                {
                    color: '#FFEB3B',
                    textColor: 'black',

                    events: []
                },
                {
                    color: '#FF9800',
                    textColor: 'white',
                    events: []
                },
                {
                    color: '#2196F3',
                    textColor: 'white',

                    events: []
                },
                {
                    color: '#607D8B',
                    textColor: 'white',
                    events: []
                },
            ];
            this.state.data.forEach(row => {
                const account = row[0];
                // const name = row[1];
                const remainder = row[2];
                const vacationType = row[3];
                const event = {
                    title: `${account} ${vacationType}`,
                    start: `${remainder}`,
                    allDay: false,
                };
                const filteredVacationType = vacationType.replace(/\s/, '');
                switch (filteredVacationType) {
                    case '하루' || '1일':
                        eventSources[0].events.push(event);
                        break;
                    case '오전반반차':
                        eventSources[1].events.push(event);
                        break;
                    case '오전반차' || '0.5일':
                        eventSources[2].events.push(event);
                        break;
                    case '오후반반차':
                        eventSources[3].events.push(event);
                        break;
                    case '오후반차':
                        eventSources[4].events.push(event);
                        break;
                    default:
                        eventSources[0].events.push(event);

                }

            });
            $calendar.fullCalendar({
                selectable: true,
                select: (start, end, event, view) => {
                },
                height: $(window).height() * 0.83,
                windowResize: () => {
                    $calendar.fullCalendar('option', 'height', $(window).height() * 0.83);
                },
                eventSources,
                displayEventTime: false,
            });
        }
    };

    render() {
        return (
            <div className={this.props.className}>
                <Script
                    url={'https://apis.google.com/js/api.js'}
                    attributes={{ async: 1, defer: 1 }}
                    onLoad={this.onScriptLoad}
                    onError={this.onScriptError}
                />
                <h1>Google Sheet</h1>
                <button id="authorize-button" style={{ display: 'none' }}>Authorize</button>
                <button id="signout-button" style={{ display: 'none' }}>Sign Out</button>
                <button id="update-button" onClick={this.updateCell}>Update Cell</button>
                <hr/>
                <div id="calendar" />
                {this.state.pending && '불러오는중...'}
                {!this.state.pending && !this.state.auth && '접근 권한이 없는 계정입니다.'}
                {this.renderSheet()}
            </div>
        );
    }
}

const StyledGoogleSheet = styled(GoogleSheet)`
  font-family: Noto Sans KR;
`;

export default StyledGoogleSheet;
