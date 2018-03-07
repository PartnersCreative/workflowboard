import { observable, computed, action, reaction } from 'mobx';
import queryString from 'query-string';
import IdentifyTouchDevices from '../utils/touchDeviceIdentifier';

import JobCard from './classes/jobcard';
import DayCell from './classes/daycell';
import JobRow from './classes/row';
import moment from 'moment';


export default class APP_STORE {

  @observable CurrentDay = moment();
  
  @observable jobRows = [];

  @computed get allDays() {
    let days = [];
    for( let i = -3; i <= 3; i++ ) {
      days.push(this.CurrentDay.clone().add(i, 'd'));
    }
    return days;
  }

  @action addJobRow(inputCategory) {
    if( !this.jobRows.find(jobRow => jobRow.category === inputCategory ) ) {
      this.jobRows.push(new JobRow(inputCategory, this.allDays));
    }
  }

  @action removeJobRow(inputCategory) {
    const rowIndex = this.jobRows.findIndex(jobRow => jobRow.category === inputCategory);
    this.jobRows.splice(rowIndex, 1)
  }

  // constructor() {
  //   this.days = allDays;
  // }
}
