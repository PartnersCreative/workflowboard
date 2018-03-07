import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Draggable } from 'react-beautiful-dnd';
import { observer, inject} from 'mobx-react';
import ObservableDraggable from './observableDraggable';

@inject('store') @observer
export default class Jobcard extends Component {

  updateField(field, e) {
    const { store, card } = this.props;
    card[field] = e.target.value;
  }

	render() {
    const { store, card, rowStore } = this.props;
    const cardId = card.cardId

	  return (
			<ObservableDraggable draggableId={card.cardId} index={this.props.index} getItemStyle={this.props.getItemStyle}>

      	<input type='text' className='jobName' name='jobName' value={card.jobName} onChange={e => this.updateField('jobName', e)} />
      	<input type='text' className='jobFunction' name='jobFunction' value={card.jobFunction} onChange={e => this.updateField('jobFunction', e)} />
      	<input type='text' className='endDate' name='endDate' value={card.endDate} onChange={e => this.updateField('endDate', e)} />
      	<input type='text' className='asignee' name='asignee' value={card.asignee} onChange={e => this.updateField('asignee', e)} />
      	<input type='text' className='projectManager' name='projectManager' value={card.projectManager} onChange={e => this.updateField('projectManager', e)} />
        <input type='text' className='notes' name='notes' value={card.notes} onChange={e => this.updateField('notes', e)} />
      	<input type='text' className='startDate' name='startDate' value={card.startDate} onChange={e => this.updateField('startDate', e)} />

        <button className='remove' onClick={() => rowStore.removeJobCard(card.cardId, card.startDate)}>X</button>
	      {cardId}
	    </ObservableDraggable>

    );
  }
}
