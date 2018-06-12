import React from 'react';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

class Rx extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
      range(1, 200)
          .pipe(filter(x => x % 2 === 1), map(x => x + x))
          .subscribe(x => console.log(x));
  }


  render() {
    return (
        <div>Rx</div>
    )
  }

}

export default Rx;
