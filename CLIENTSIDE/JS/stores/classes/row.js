import React from 'react';
import { observable, computed, action } from 'mobx';
import request from 'axios';
import JobCard from './jobCard';


export default class Row {

  // @observable dateRange = null;
  
  // @observable associatedRow = null;

  @observable category = null;
  @observable jobCards = [];



  @action addJobCard(category) {
    this.jobCards.push(new JobCard(category));
  }


  @action removeJobCard(cardId) {
    const jobCardIndex = this.jobCards.findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards.splice(jobCardIndex, 1)
  }
  

  constructor(category){
    this.category = category;
  }
}