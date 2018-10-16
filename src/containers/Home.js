import React from 'react';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>HOME</h1>
                <h3>NODE_ENV</h3>
                <p>{process.env.NODE_ENV}</p>
            </div>
        )
    }

}

export default Home;
