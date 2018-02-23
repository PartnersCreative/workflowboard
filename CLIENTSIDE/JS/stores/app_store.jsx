
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


  @observable editing = false;
  //@observable devMode = false;


  // *********************
  // *** COMPUTED VALS ***
  // *********************

  // @computed get totalSharks() {
  //   let totalSharks = 0;
  //   this.user.sharkicorns.map((sharkicorn) => {
  //     if (sharkicorn.showing) {
  //       totalSharks++;
  //     }
  //   });
  //   return totalSharks;
  // }

  // @computed get deletedSharks() {
  //   const deletedSharks = [];
  //   this.user.sharkicorns.map((sharkicorn) => {
  //     if (!sharkicorn.showing) {
  //       deletedSharks.push(sharkicorn);
  //     }
  //   });
  //   return deletedSharks;
  // }


  // *********************
  // ****** ACTIONS ******
  // *********************

  // @action async getUserFromDB() {
  //   const response = await fetch('/api');
  //   const json = await response.json();

  //   if (json) {
  //     this.user = json;
  //   }
  // }

  // @action toggleEditing() {
  //   if (this.editing) {
  //     this.saveToDB();
  //     this.editing = !this.editing;
  //   } else {
  //     this.editing = !this.editing;
  //   }
  // }

  // @action async saveToDB() {
  //   const reqBody = JSON.stringify(this.user);
  //   await fetch('/api', { method: 'POST', body: reqBody, headers: {'content-type': 'application/json'} });
  // }

  @action addJobCard() {
    this.jobCards.push(new JobCard());
  }

  @action removeJobCard(cardId) {
    const jobCardIndex = this.jobCards.findIndex(jobCard => jobCard.cardId === cardId);
    this.jobCards.splice(jobCardIndex, 1)
  }

  constructor() {
    // SET UP THE APP_STORE
    //this.getUserFromDB();

    // SNIFF FOR TOUCH SCREENS
    //IdentifyTouchDevices();

    // SNIFF FOR DEV MODE
    const urlQuery = queryString.parse(location.search);
    if (urlQuery.mode === 'dev') {
      this.devMode = true;
    }
  }
}
