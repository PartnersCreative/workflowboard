import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import $ from 'jquery';

@inject('store') @observer
export default class DayCell extends Component {

	constructor(props) {
	  super(props);
		//console.log(props);
	};

	render() {
		const { store, row } = this.props;
		//const { store, row } = this.props;
		//const jobRow = row.rowId;

		const cards = store.jobCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
			}
		});

    const mondayCards = store.mondayCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    	}
    });
    const tuesdayCards = store.tuesdayCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    	}
    });
    const wednesdayCards = store.wednesdayCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    	}
    });
    const thursdayCards = store.thursdayCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    	}
    });
    const fridayCards = store.fridayCards.map((card, index) => {
    	if(card.category === this.props.category) {
    		return <JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    	}
    });

	  return (
	  	<div id="flexer">
		
				<button className='ghostBtn' onClick={() => store.addJobCard(this.props.category)}>Add {this.props.category} Card</button>
				<button className='remove' onClick={() => store.removeJobRow(jobRow.rowId)}>X</button>

				<Droppable droppableId="Monday">
		     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		      id="dayCell"
		 		    >
		 		    	<div id="dow1"></div>
		 		    	<h1>Monday</h1>

		 		    	{mondayCards}
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
		 		    	{tuesdayCards}
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
		 		    	{wednesdayCards}
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
		 		    	{thursdayCards}
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
		 		    	{fridayCards}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>
			</div>
		)
	}
}