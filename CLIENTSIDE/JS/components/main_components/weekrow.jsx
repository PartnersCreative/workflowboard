import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import $ from 'jquery';
import ObservableDroppable from './observableDroppable';

@inject('store') @observer
export default class DayCell extends Component {

	render() {
		const { store, rowStore } = this.props;

		const getJobCards = day =>
			rowStore.jobCards[day].map((card, index) => <JobCard rowStore={rowStore} key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} /> );

		const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

	  return (
	  	<div id="flexer">
				<button className='ghostBtn' onClick={() => rowStore.addJobCard(rowStore.category, "monday")}>Add {rowStore.category} Card</button>
				<button className='ghostBtn' onClick={() => store.removeJobRow(rowStore.category)}>X</button>

				{weekDays.map(day =>
					<ObservableDroppable droppableId={day} key={day} getListStyle={this.props.getListStyle}>
			      <h1>{day}</h1>
			      {getJobCards(day)}
					</ObservableDroppable>
				)}
			</div>
		)
	}
}
