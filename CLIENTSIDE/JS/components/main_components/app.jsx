import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import $ from 'jquery';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import WeekRow from './weekrow';
import JobCard from './jobcard';
import moment from 'moment';

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
    console.log('result', result)
    const {store} = this.props;

    if (!result.destination) {
      return;
    }

    const jobRows = store.jobRows;

    //moving cards from one daycell to another
    const sourceDay = result.source.droppableId.toLowerCase();
    const destinationDay = result.destination.droppableId.toLowerCase();
    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    let sourceRow;
    let sourceCard;

    console.log('jobRows:', jobRows);

    jobRows.forEach(row => {
      row.forEach(daycell => {
        daycell.find( card => card.cardId === result.draggableId );
        if( jobCard ) {
          sourceRow = row;
          sourceCard = jobCard;
        }
      })
    })

    //moving of the dragged card to new index
    if( sourceCard && sourceDay === destinationDay ) {
      const dayStore = sourceRow.jobCards[sourceDay];
      const [removed] = dayStore.splice(startIndex, 1);
      dayStore.splice(endIndex, 0, removed);
    } else {
      const cardIndex = sourceRow.jobCards[sourceDay].findIndex(card => card.cardId === result.draggableId);
      sourceRow.jobCards[sourceDay].splice(cardIndex, 1);
      sourceRow.jobCards[destinationDay].splice(endIndex, 0, sourceCard);
      sourceCard.startDate = destinationDay;
    }
  }

  render() {

    const { store } = this.props;

    //console.log(moment().format('d'));

    const jobRow = store.jobRows.map((row) => {
      return <DragDropContext onDragEnd={this.onDragEnd} key={row.category}><WeekRow getItemStyle={getItemStyle} getListStyle={getListStyle} rowStore={row} /></DragDropContext>
    });

    return (
      <div>

        <button className='ghostBtn' onClick={() => store.addJobRow(this.rowCategoryInput.value)}>Add Row</button>
        <input type="text" ref={(input) => { this.rowCategoryInput = input; }} ></input>
        {/*<button className='ghostBtn' onClick={() => store.addWeek(this.rowCategoryInput.value)}>Add Week</button>*/}

        <div>{jobRow}</div>
      </div>
    );
  }
}
