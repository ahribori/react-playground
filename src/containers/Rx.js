import React from 'react';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

class Rx extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
        this.text$ = new Subject();
    }

    render() {
        return (
            <div>
                <input onChange={e => this.text$.next(e.target.value)}/>
                <p>{this.state.text}</p>
            </div>
        );
    }

    componentDidMount() {
        this.text$.pipe(
            debounce(() => timer(200))
        ).subscribe(text => this.setState({text}));
    }
}

export default Rx;
