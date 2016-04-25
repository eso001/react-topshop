import axios from 'axios';

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function FetchItems () {
  const request = axios.get('http://localhost:8123/api/render/renderAll');
  console.log('inside before axios get', request);

  return {
    type: FETCH_ITEMS,
    payload: request
  };
}