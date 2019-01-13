import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './index.css';

class ReactCollapsible extends Component {
  onOpening = () => {
    console.log('onOpening');
  };
  onOpen = () => {
    console.log('opOpen');
  };
  onClosing = () => {
    console.log('onClosing');
  };
  onClose = () => {
    console.log('onClose');
  };

  render() {
    return (
      <div className="container">
        {Array.from(Array(10)).map((item, index) => {
          return (
            <Collapsible
              open={true}
              key={`collapsible_${index}`}
              triggerTagName="div"
              trigger={<div>item {index + 1} 열기</div>}
              triggerWhenOpen={<div>item {index + 1} 닫기</div>}
              transitionTime={100}
              accordionPosition="accordionPosition1"
              onOpening={this.onOpening}
              onOpen={this.onOpen}
              onClosing={this.onClosing}
              onClose={this.onClose}
            >
              <p>Hello world!</p>
            </Collapsible>
          );
        })}
      </div>
    );
  }
}

export default ReactCollapsible;
