import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';
import Draggable from 'react-draggable';

@inject('store') @observer
export default class Card extends Component {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[100, 100]}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="handle">
          <div>Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
    );
  }
}
