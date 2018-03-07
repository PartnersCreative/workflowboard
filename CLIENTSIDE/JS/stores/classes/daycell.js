import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';
import JobCard from './jobcard';

export default class DayCell {

  @observable date = null;
  
  @observable associatedRow = null;

  @observable jobCards = [];

  @action addJobCard(category) {
    this.jobCards.push(new JobCard(category));
  }

  @action removeJobCard(cardId, day) {
    const jobCardIndex = this.jobCards[day].findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards[day].splice(jobCardIndex, 1)
  }

  constructor(moment) {
    this.date = moment.format('D');
  }
}