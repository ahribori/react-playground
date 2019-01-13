import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import './index.css';

class ReactCollapsible extends Component {
  onOpening = () => {
    console.log('onOpening');
  };
  onOpen = () => {
    console.log('opOpen');
    this.calculateLayerPosition();
  };
  onClosing = () => {
    console.log('onClosing');
  };
  onClose = () => {
    console.log('onClose');
    this.calculateLayerPosition();
  };

  calculateLayerPosition = () => {
    requestAnimationFrame(() => {
      this.offsetBottom = 0;
      const $allCollapsible = document.querySelectorAll('.Collapsible');
      Object.keys($allCollapsible)
        .reverse()
        .forEach(key => {
          const $collapsible = $allCollapsible[key];
          const $trigger = $collapsible.querySelector(
            '.Collapsible__trigger',
          );
          const { top } = $collapsible.getBoundingClientRect();
          const { height } = $trigger.getBoundingClientRect();
          if (top + height > window.innerHeight - this.offsetBottom) {
            $trigger.style.position = 'fixed';
            $trigger.style.bottom = this.offsetBottom + 'px';
            $collapsible.style.paddingTop = height + 'px';
            this.offsetBottom = this.offsetBottom + height;
          } else {
            $collapsible.style.paddingTop = 0;
            $trigger.style.position = 'static';
            this.offsetBottom = this.offsetBottom - height;
          }
        });
    });
  };

  render() {
    return (
      <div className="container">
        {Array.from(Array(20)).map((item, index) => {
          return (
            <Collapsible
              open={true}
              key={`collapsible_${index}`}
              triggerTagName="div"
              trigger={<div>item {index + 1} 열기</div>}
              triggerWhenOpen={<div>item {index + 1} 닫기</div>}
              transitionTime={100}
              accordionPosition={`position_${index}`}
              onOpening={this.onOpening}
              onOpen={this.onOpen}
              onClosing={this.onClosing}
              onClose={this.onClose}
            >
              <p>Hello world!</p>
              <p>Hello world!</p>
              <p>Hello world!</p>
              <p>Hello world!</p>
              <p>Hello world!</p>
              <p>Hello world!</p>
            </Collapsible>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.calculateLayerPosition();
    window.addEventListener('scroll', this.calculateLayerPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.calculateLayerPosition);
  }

}

export default ReactCollapsible;
