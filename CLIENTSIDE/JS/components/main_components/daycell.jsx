import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';
import moment from 'moment';

@inject('store') @observer
export default class DayCell extends Component {

	constructor(props) {
	  super(props);
		console.log(props);
	};

	render() {
		const { store } = this.props;

		const cards = store.jobCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));

    const mondayCards = store.mondayCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));
    const tuesdayCards = store.tuesdayCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));
    const wednesdayCards = store.wednesdayCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));
    const thursdayCards = store.thursdayCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));
    const fridayCards = store.fridayCards.map((card, index) => (
    	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
    ));






		const time = moment().format();
		console.log(time);

    //const weekArray = moment.weekdays();

    const now = moment().toString()


		var dow = moment().isoWeekday();
		console.log(dow);

		const weekArray = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ];








		// const days = [].map((day, index) => (
  //   	<Droppable droppableId={`day_${Math.random()}`} >
	 //    	{(provided, snapshot) => (

		// 		    <div
		// 		      ref={provided.innerRef}
		// 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		// 		    >

		// 		    <p>{day}</p>

		// 		      {provided.placeholder}
		// 		    </div>
		// 		  )}
		// 		</Droppable>
  //   ));


	  return (
	  	<div>
			<Droppable droppableId={`day_${Math.random()}`} className="DayCell">

			  {(provided, snapshot) => (

			    <div
			      ref={provided.innerRef}
			      style={this.props.getListStyle(snapshot.isDraggingOver)}
			    >

					<button className='ghostBtn' onClick={() => store.addJobCard()}>Add Card</button>
					<h1>AllCards</h1>
					{time}
					{cards}
			    
			      {provided.placeholder}
			    </div>
			  )}
			</Droppable>

			<Droppable droppableId={`day_${Math.random()}`} className="DayCell">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		    >
		 		    	<h1>Monday</h1>

		 		    	{mondayCards}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId={`day_${Math.random()}`} className="DayCell">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		    >
		 		    	<h1>Tuesday</h1>
		 		    	{tuesdayCards}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId={`day_${Math.random()}`} className="DayCell">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		    >
		 		    	<h1>Wednesday</h1>
		 		    	{wednesdayCards}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId={`day_${Math.random()}`} className="DayCell">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
		 		    >
		 		    	<h1>Thursday</h1>
		 		    	{thursdayCards}
		 		      {provided.placeholder}
		 		    </div>
		 		  )}
		 		</Droppable>

		 		<Droppable droppableId={`day_${Math.random()}`} className="DayCell">
	     	{(provided, snapshot) => (

		 		    <div
		 		      ref={provided.innerRef}
		 		      style={this.props.getListStyle(snapshot.isDraggingOver)}
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