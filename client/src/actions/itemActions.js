import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING
} from './types';

import axios from'axios';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading()); // set loading to true
  // rember proxy on the package.json
  axios
    .get('api/items')
    .then(res => 
      dispatch({
        type: GET_ITEMS, // Send to the redux store
        payload: res.data // Data comming from backend
      })
    );
}

export const addItem = (item) => dispatch => {
  axios.post('api/items', item)
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        payload: res.data
    }));
}

export const deleteItem = (id) => dispatch => {
  axios.delete(`api/items/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })  
    );
}



export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}