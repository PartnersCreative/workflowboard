import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Card from './cards';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Daycell from './daycell';
import JobCard from './jobcard';

const getItems = count =>
Array.from({ length: count }, (v, k) => k).map(k => ({
  id: `item-${k}`,
  content: `item ${k}`,
}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
  
  componentDidMount() {

  }

  constructor(props) {
    super(props);
    
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const {store} = this.props;
    
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      store.jobCards,
      result.source.index,
      result.destination.index
    );
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Daycell getItemStyle={getItemStyle} state={this.state} getListStyle={getListStyle}/>
      </DragDropContext>
    );
  }
}

