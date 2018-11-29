import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SlickExample extends Component {
    constructor(props) {
        super(props);
        this.slider1 = React.createRef();
        this.slider2 = React.createRef();
    }

    prev = () => {
        const { current: slider } = this.slider1;
        slider.slickPrev();
    };

    next = () => {
        const { current: slider } = this.slider1;
        slider.slickNext();
    };

    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            beforeChange: (olderIndex, newIndex) => {
                console.log(olderIndex, newIndex)
                const { current: slider2 } = this.slider2;
                slider2.slickGoTo(newIndex);
            },
        };
        return (
            <div>
                <div>
                    <button onClick={this.prev}>Prev</button>
                    <button onClick={this.next}>Next</button>
                </div>
                <div style={{ border: '1px solid red' , width: 500 }}>
                    <h2>Single Item</h2>
                    <div style={{ border: '1px solid blue', width: 100, float: 'right'}}>
                        <Slider
                            autoplay={false}
                            ref={this.slider2}
                            fade={true}
                        >
                            <div>사과</div>
                            <div>귤</div>
                            <div>오렌지</div>
                            <div>바나나</div>
                        </Slider>
                    </div>
                    <Slider {...settings} ref={this.slider1}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SlickExample;
