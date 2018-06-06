import React from 'react';
import Script from 'react-load-script';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY || '';
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

class GoogleSheet extends React.Component {
    constructor(props) {
        super(props);
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
            // listMajors();
        } else {
            authorizeButton.style.display = 'block';
            signoutButton.style.display = 'none';
        }
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
                <button id="authorize-button" style={{display: 'none'}}>Authorize</button>
                <button id="signout-button" style={{display: 'none'}}>Sign Out</button>
            </div>
        );
    }

}

export default GoogleSheet;
