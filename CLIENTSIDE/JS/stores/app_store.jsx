
import { observable, computed, action, reaction } from 'mobx';

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

  @observable jobRows = [];

  @observable daysDisplayed = [ "monday", "tuesday", "wednesday", "thursday", "friday"];

  // @observable get allCards(){

  //   const allCards = []

  //   this.jobCards.map((jobCard, index) => {
  //     if (jobCard.startDate === daysOfTheWeek[index]) {
  //       allCards.push(jobCard);
  //     }
  //   });
  //   return allCards;
  // }









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






  @action addJobCard(category) {
    this.jobCards.push(new JobCard(category));
  }


  @action removeJobCard(cardId) {
    const jobCardIndex = this.jobCards.findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards.splice(jobCardIndex, 1)
  }
  
  @action addJobRow(inputCategory) {
    //console.log("trying to push new row");
    if( !this.jobRows.find(jobRow => jobRow.category === inputCategory ) ) {
      this.jobRows.push(new JobRow(inputCategory));
    }

  }

  @action removeJobRow(rowId) {
    console.log("trying to remove row");
    const rowIndex = this.jobRows.findIndex(jobRow => jobRow.rowId === rowId);
    this.jobRows.splice(rowIndex, 1)
  }

  constructor() {
    const urlQuery = queryString.parse(location.search);

    if (urlQuery.mode === 'dev') {
      this.devMode = true;
    }
    reaction( () => this.jobCards.map( card => card ), ( jobCards ) => console.log(jobCards));
  }
}
