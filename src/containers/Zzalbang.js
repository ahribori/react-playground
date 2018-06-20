import React from 'react';

class Zzalbang extends React.Component {
    constructor(props) {
        super(props);
        this.myCanvas = React.createRef();
        this.state = {
            message: '',
            context: null,
            image: null,
        };
    }

    componentDidMount() {
        const canvas = this.myCanvas.current;
        const context = canvas.getContext('2d');
        this.setState({
            context,
        }, () => {
            const image = new Image();
            image.onload = () => {
                canvas.width = image.width;
                canvas.height = image.height;
                this.state.context.drawImage(image, 0, 0);
            };
            image.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
            this.setState({
                image,
            }, () => {
                this.paint();
            });
        });

    }

    componentDidUpdate() {
        this.paint();
    }

    paint = () => {
        const canvas = this.myCanvas.current;
        const context = this.state.context;
        context.clearRect(0, 0, canvas.width, canvas.height);
        if (this.state.image) {
            context.drawImage(this.state.image, 0, 0);
        }
        context.font = '30px Arial';
        context.fillText(this.state.message, 10, 50);
    };

    render() {
        return (
            <div>
                <canvas id="myCanvas" width={500} height={500} ref={this.myCanvas}/>
                <br />
                <input type="text" value={this.state.message}
                       onChange={e => this.setState({ message: e.target.value })}/>
            </div>
        );
    }
}

export default Zzalbang;
