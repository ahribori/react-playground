import React from 'react';
import {Observable, Subject, ReplaySubject, from, fromEvent, of, range} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';

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
        this.text$.subscribe(text => this.setState({text}));
    }
}

export default Rx;
