import React from 'react';

class Zzalbang extends React.Component {
    constructor(props) {
        super(props);
        this.myCanvas = React.createRef();
        this.state = {
            message: '',
            ctx: null,
        };
    }

    componentDidMount() {
        const canvas = this.myCanvas.current;
        const context = canvas.getContext('2d');
        const image = new Image();
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0);
        };
        image.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
        this.image = image;
        this.setMessage();
    }

    componentDidUpdate() {
        this.setMessage();
    }

    setMessage = () => {
        this.rePaint();
        const context = this.getContext();
        context.font = '30px Arial';
        context.fillText(this.state.message, 10, 50);
    };

    drawImage = () => {
        const canvas = this.myCanvas.current;
        const context = canvas.getContext('2d');
        context.drawImage(this.image, 0, 0);
    };

    rePaint = () => {
        const canvas = this.myCanvas.current;
        this.getContext().clearRect(0, 0, canvas.width, canvas.height);
        this.drawImage();
    };

    getContext = () => {
        const canvas = this.myCanvas.current;
        return canvas.getContext('2d');
    };

    render() {
        return (
            <div>
                <canvas id="myCanvas" width={500} height={500} ref={this.myCanvas}/>
                <input type="text" value={this.state.message}
                       onChange={e => this.setState({ message: e.target.value })}/>
            </div>
        );
    }
}

export default Zzalbang;
