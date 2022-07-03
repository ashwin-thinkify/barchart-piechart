import { GET_NEW_DATA_PIE,GET_NEW_DATA_BAR } from "./actionTypes";

export const getNewDataPie = content => ({
  type: GET_NEW_DATA_PIE,
  payload: {
    content
  }
});

export const getNewDataBar = content => ({
  type: GET_NEW_DATA_BAR,
  payload: { content }
});


