import { Droppable, Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import JobCard from './jobcard';
import { observer, inject } from 'mobx-react';


@inject('store') @observer
export default class Daycell extends Component {

	constructor(props) {
	  super(props);
		console.log(props);
	};

	render() {
		const { store } = this.props;

    	const cards = store.jobCards.map((card, index) => (
      	<JobCard key={card.id} card={card} index={index} getItemStyle={this.props.getItemStyle} />
      ));

	  return (

			<Droppable droppableId="droppable">

			  {(provided, snapshot) => (

			    <div
			      ref={provided.innerRef}
			      style={this.props.getListStyle(snapshot.isDraggingOver)}
			    >

					<button className='ghostBtn' onClick={() => store.addJobCard()}>Add Card</button>

					{cards}
			      	
			      {provided.placeholder}
			    </div>
			  )}
			</Droppable>
		)
	}
}