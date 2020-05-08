

import {initStore} from './initialState'
import { combineReducers } from 'redux';


const bookCarReducer = (store=initStore.cars, action) => {
  if(action.type == 'BOOK_CAR') {
    console.log("called")
    let localStore = store;
    console.log(action.payload)
    localStore = localStore.map(o=> {
      if(o.vehicleNo==action.payload.vehicleNo) {
        o.booking=action.payload.booking
        console.log("CHANGED")
        console.log(o.booking)
      }

      return o;
    })

    console.log(localStore)
    return localStore;
    
  }
  return store;
};

const selectedCarReducer = (store=initStore.selectedCar, action) => {
  if(action.type==='CAR_SELECTED') {
    return {...store, ...action.payload}
  }
  return store;
}

export default combineReducers({
  cars: bookCarReducer,
  selectedCar: selectedCarReducer
});