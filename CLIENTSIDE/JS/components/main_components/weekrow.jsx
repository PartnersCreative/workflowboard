import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import moment from 'moment';
import $ from 'jquery';
import ObservableDroppable from './observableDroppable';
import JobCard from './jobcard';
import DayCell from './daycell';

@inject('store') @observer
export default class WeekRow extends Component {

	render() {

		const { store, rowStore } = this.props;


		// const getJobCards = day =>
		// rowStore.jobCards[day].map((card, index) => <JobCard rowStore={rowStore} key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} /> );

		const getDayCells = rowStore.daycells.map((daycell) => 
			<DayCell dayCellStore={daycell} category={rowStore.category} {...this.props}  />
		);

		console.log("this is the store " , toJS(store));

	  return (
	  	<div id="flexer">
				<button className='remove' onClick={() => store.removeJobRow(rowStore.category)}>ROW ROMOVER</button>

				{getDayCells}

			</div>
		)
	}
}
