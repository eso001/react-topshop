import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function FetchItems () {
  console.log('inside before axios get');
  const request = axios.get('http://localhost:8123/api/render/renderAll');

  return {
    type: FETCH_ITEMS,
    payload: request
  };
}