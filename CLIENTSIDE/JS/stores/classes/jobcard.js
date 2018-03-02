import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';

export default class JobCard {


  @observable cardId = null;
  @observable startDate = "monday";
  @observable endDate = "end/date";
  @observable jobName = "DEL-3269";
  @observable jobFunction = "Programming";
  @observable asignee = "asignee";
  @observable notes = "notes";
  @observable projectManager = "PM";
  @observable category = null;

  constructor(category){
    this.cardId = `card_${Math.random()}`;
    this.category = category;
  }
}
