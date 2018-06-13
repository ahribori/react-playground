import React from 'react';
import { Observable, Subject, ReplaySubject, from, fromEvent, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

class Rx extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const rxButton = document.querySelector('#rx_button');
        const source = fromEvent(rxButton, 'click');
        const example = source.pipe(map(event => event));
        const subscribe = example.subscribe(val => console.log(val));
        // range(1, 200)
        //     .pipe(filter(x => x % 2 === 1), map(x => x + x))
        //     .subscribe(x => console.log(x));
    }

    render() {
        return (
            <button id={'rx_button'}>Button</button>
        );
    }

}

export default Rx;
