import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';
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

    const jobCards = store.jobCards;

    //moving cards from one daycell to another
    const sourceDay = result.source.droppableId.toLowerCase();
    const destinationDay = result.destination.droppableId.toLowerCase();
    const sourceCard = jobCards.find( card => card.cardId === result.draggableId )


    //moving of the dragged card to new index 
    if( sourceDay === destinationDay ) {
      const dayStore = store[`${sourceDay}Cards`];
      const startIndex = result.source.index;
      const endIndex = result.destination.index;

    } else {
      sourceCard.startDate = destinationDay;
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    
    const { store } = this.props;

    const jobRow = store.jobRows.map((row) => {
      // console.log( "this is the row cat " + row.category );
    
     return <DragDropContext onDragEnd={this.onDragEnd}><DayCell getItemStyle={getItemStyle} getListStyle={getListStyle} category={row.category} /></DragDropContext>
    });
    

    return (
      <div>
        
        <button className='ghostBtn' onClick={() => store.addJobRow(this.rowCategoryInput.value)}>Add Row</button>
        <input type="text" ref={(input) => { this.rowCategoryInput = input; }} ></input>
        
          <div>{jobRow}</div>
      </div>
    );
  }
}

