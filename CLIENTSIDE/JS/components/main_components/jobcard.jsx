import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Draggable } from 'react-beautiful-dnd';
import { observer, inject} from 'mobx-react';



const Dragger = ({getItemStyle, ...props}) => 
<observer>
	<Draggable {...props} >
		{(provided, snapshot) => (
    <div>
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        )}
      >

      {props.children}

      </div>
      {provided.placeholder}
    </div>
  )}
  </Draggable>
</observer> ;

@inject('store') @observer
export default class Jobcard extends Component {

	componentDidMount() {
    const { cardStore } = this.props;
  }

	constructor(props) {
	  super(props);
	};
  

  updateField(field, e) {
    const { store } = this.props;
    store[field] = e.target.value;
    this.setState({ field: field });
    //this.props.card.jobName = e.target.value;
    // console.log(this.props.card.jobName, "JobName")
  }


	render() {
  	const { store } = this.props;
		// const name = this.props.card.jobName;
		// const func = this.props.card.jobFunction;

    // console.log(this.props.card.cardId, "cardId")

	    return (
					<Dragger draggableId={this.props.card.cardId} index={this.props.index} getItemStyle={this.props.getItemStyle}>

          	<h4>Job Name</h4>
          	<input type='text' className='jobName' name='jobName' value={this.props.card.jobName} onChange={e => this.updateField('jobName', e)} />
          	<input type='text' className='jobFunction' name='jobFunction' value={this.props.card.jobFunction} onChange={e => this.updateField('jobFunction', e)} />
            <button className='remove' onClick={() => store.removeJobCard(this.props.card.cardId)}>X</button>
			          
			    </Dragger>

    );
  }
}
