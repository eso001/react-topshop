import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_ITEM = 'ADD_ITEM'
export function FetchItems () {
  const request = axios.get('http://localhost:8123/api/render/renderAll');
  console.log('inside before axios get', request);

  return {
    type: FETCH_ITEMS,
    payload: request
  };
}

export function addItem(props){

  const request = axios.post('http://localhost:8123/api/addItem', props)

  return {
  	type: ADD_ITEM,
  	payload: request
  }
}