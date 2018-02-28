import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Card from './cards';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DayCell from './daycell';
import JobCard from './jobcard';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 250,
});

@inject('store') @observer
export default class App extends Component {

  onDragEnd = (result) => {
    const {store} = this.props;

    if (!result.destination) {
      return;
    }

    // const currentDate = 

    const jobCards = store.jobCards;
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    //moving of the dragged card to new index 
    const [removed] = jobCards.splice(startIndex, 1);
    jobCards.splice(endIndex, 0, removed);
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <div>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <DayCell getItemStyle={getItemStyle} getListStyle={getListStyle} />
      </DragDropContext>
      </div>
    );
  }
}

