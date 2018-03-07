import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';
import moment from 'moment';
import $ from 'jquery';
import ObservableDroppable from './observableDroppable';


@observer
export default class DayCell extends Component {

	render() {
		const { dayCellStore, category } = this.props;

		const getJobCards = dayCellStore.jobCards.map((card, index) =>  <JobCard dayCellStore={dayCellStore} key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} /> );
		
	  return (
	  	<div id="flexer">
		
				<button className='ghostBtn' onClick={() => dayCellStore.addJobCard(category)}>ADD CARD{category}</button>

		 		<ObservableDroppable droppableId={`${category}_${dayCellStore.Date}`} id="dow2" {...this.props} >
 		    	<h3>{dayCellStore.date}</h3>
 		    	{getJobCards}
		 		</ObservableDroppable>

			</div>
		)
	}
}