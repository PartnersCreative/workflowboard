import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';

export default class Row {

  // @observable dateRange = null;
  
  // @observable associatedRow = null;

  @observable category = null;

  constructor(category){
    this.category = category;
  }
}