import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import $ from 'jquery';

@observer
export default class DayCell extends Component {

	render() {
		const { rowStore } = this.props;

		const jobCards = rowStore.jobCards;
		console.log("this is the jobcards array " , rowStore)

	// const getJobCards = day => 
	// 	rowStore.jobCards.map((card, index) => {
	// 		console.log("card start date",card.startDate);
 //    	if(card.startDate === day) {
 //    		return <JobCard rowStore={rowStore} key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
 //    	}
 //    });	


 		const getJobCards = day => 
			jobCards.map((card, index) => {
				console.log("card start date",card.startDate);
	    	
	    });	
	
	  return (
	  	<div id="flexer">
		
				<button className='ghostBtn' onClick={() => rowStore.addJobCard(rowStore.category)}>Add {rowStore.category} Card</button>
				<button className='remove' onClick={() => rowStore.removeJobRow(jobRow.rowId)}>X</button>

				<Droppable droppableId="Monday">
		     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    	<div id="dow1"></div>
		 		    	<h1>Monday</h1>

		 		    	{getJobCards('monday')}
		 		    	{jobCards.map(() => <h1> i am watching </h1>)}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId="Tuesday" id="dow2">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    	<h1>Tuesday</h1>
		 		    	{getJobCards('tuesday')}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId="Wednesday" id="dow3">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    <div id="dow3"></div>
		 		    	<h1>Wednesday</h1>
		 		    	{getJobCards('wednesday')}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId="Thursday" id="dow4">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    	<h1>Thursday</h1>
		 		    	{getJobCards('thursday')}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId="Friday" id="dow5">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    	<h1>Friday</h1>
		 		    	{getJobCards('friday')}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>
			</div>
		)
	}
}