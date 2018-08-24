import React, { Component } from 'react';
import Img from 'react-image';
import VisibilitySensor from 'react-visibility-sensor';
import image0 from '../images/0.jpg';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import image8 from '../images/8.jpg';

class ReactImages extends Component {
    render() {
        return (
            <div>
                <VisibilitySensor>
                    <Img
                        src={image0}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image1}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image2}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image3}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image4}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image5}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image6}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image7}
                    />
                </VisibilitySensor>
                <VisibilitySensor>
                    <Img
                        src={image8}
                    />
                </VisibilitySensor>
                <VisibilitySensor
                    scrollCheck={true}
                    onChange={console.log}
                >
                    {isVisible => {
                        return <div style={{ border: '1px solid red', width: 300, height: 300}}>{isVisible ? 'visible': 'invisible'}</div>;
                    }}
                </VisibilitySensor>
            </div>
        );
    }

}

export default ReactImages;
