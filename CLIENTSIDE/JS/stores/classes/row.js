import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';
import JobCard from './jobcard';

export default class Row {

  @observable category = null;
  @observable jobCards = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
  }

  @action addJobCard(category, day) {
    this.jobCards[day].push(new JobCard(category));
  }

  @action removeJobCard(cardId, day) {
    const jobCardIndex = this.jobCards[day].findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards[day].splice(jobCardIndex, 1)
  }

  constructor(category){
    this.category = category;
  }
}
