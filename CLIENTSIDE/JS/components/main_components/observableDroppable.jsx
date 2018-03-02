import { Droppable } from 'react-beautiful-dnd';
import React, { Component } from 'react';
import { observer } from 'mobx-react';



const ObservableDroppable = ({getListStyle, ...props}) =>
  <observer id="dayCell">
    <Droppable {...props}>
      {(provided, snapshot) => (

        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}

        >

          {props.children}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </observer>;

export default ObservableDroppable;
