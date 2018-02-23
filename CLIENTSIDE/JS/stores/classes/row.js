import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';

export default class Row {

  @observable dateRange = null;
  
  @observable associatedRow = null;

  //@action async getName() {
    // const response = await fetch('https://randomuser.me/api/');
    // const json = await response.json();
    // const newName = json.results[0].name.first;
    // this.name = newName;
    // this.showing = true;
  //}
}