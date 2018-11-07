import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesExample extends Component {
    render() {
        const styles = {
            backgroundColor: 'black',
            width: '100%',
            height: '100%',
            zIndex: 1000,
        };
        return (
            <div style={styles}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }}}
                />
            </div>
        );
    }
}

export default ParticlesExample;
