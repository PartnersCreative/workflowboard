
import { observable, computed, action } from 'mobx';

// DEV MODE TOOLS
import queryString from 'query-string';

// UTILITY FUNCTIONS
import IdentifyTouchDevices from '../utils/touchDeviceIdentifier';

import JobCard from './classes/jobcard';
import DayCell from './classes/daycell';
import JobRow from './classes/row';

export default class APP_STORE {

  // *******************
  // *** OBSERVABLES ***
  // *******************
  @observable jobCards = [];


  @computed get mondayCards(){
    const mondayCards = [];
    this.jobCards.map((jobCard) => {
      if (jobCard.startDate === "monday") {
        mondayCards.push(jobCard);
      }
    });
    return mondayCards;
  }
  @computed get tuesdayCards(){
    const tuesdayCards = [];
    this.jobCards.map((jobCard) => {
      if (jobCard.startDate === "tuesday") {
        tuesdayCards.push(jobCard);
      }
    });
    return tuesdayCards;
  }
  @computed get wednesdayCards(){
    const wednesdayCards = [];
    this.jobCards.map((jobCard) => {
      if (jobCard.startDate === "wednesday") {
        wednesdayCards.push(jobCard);
      }
    });
    return wednesdayCards;
  }
  @computed get thursdayCards(){
    const thursdayCards = [];
    this.jobCards.map((jobCard) => {
      if (jobCard.startDate === "thursday") {
        thursdayCards.push(jobCard);
      }
    });
    return thursdayCards;
  }
  @computed get fridayCards(){
    const fridayCards = [];
    this.jobCards.map((jobCard) => {
      if (jobCard.startDate === "friday") {
        fridayCards.push(jobCard);
      }
    });
    return fridayCards;
  }








  @action addJobCard() {
    this.jobCards.push(new JobCard());
  }

  @action removeJobCard(cardId) {
    const jobCardIndex = this.jobCards.findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards.splice(jobCardIndex, 1)
  }

  constructor() {
    const urlQuery = queryString.parse(location.search);
    if (urlQuery.mode === 'dev') {
      this.devMode = true;
    }
  }
}
