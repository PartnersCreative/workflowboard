import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('store') @observer
export default class Row extends Component {

  render() {
    return (
      <div>
        <div className="rowName">
          some row name
        </div>

      </div>
    );
  }
}
