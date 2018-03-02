
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
    // reaction( () => this.jobCards.map( card => card ), ( jobCards ) => console.log(jobCards));
  }
}
