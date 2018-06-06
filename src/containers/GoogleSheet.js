import React from 'react';
import Script from 'react-load-script';
import styled from 'styled-components';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

class GoogleSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
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
            range: '시트1!A1:C5',
        }).then((response) => {
            const { values } = response.result;
            this.setState({ data: values });
        }, (error) => {
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
                            return <span key={col} className={this.props.className}>{col}</span>;
                        })}
                    </div>
                );
            });
        }
    };

    render() {
        return (
            <div>
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
                {this.renderSheet()}
            </div>
        );
    }
}

const StyledGoogleSheet = styled(GoogleSheet)`
  margin: 10px;
  border: 1px dashed gray;
`;

export default StyledGoogleSheet;
