import { Draggable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import { observer } from 'mobx-react';

const ObservableDraggable = ({getItemStyle, ...props}) =>
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

export default ObservableDraggable;
