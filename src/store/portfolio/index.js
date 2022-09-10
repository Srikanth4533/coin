import { myCoinsSeedData } from 'utils'

const initialState = {
    myCoins: myCoinsSeedData,
    data: [],
    isLoading: false,
    error: false
}


export const DELETE_COIN = 'DELETE_COIN'
export const GET_MYCOINS_DATA_ERROR = 'GET_MYCOINS_DATA_ERROR'
export const GET_MYCOINS_DATA_PENDING = 'GET_MYCOINS_DATA_PENDING'
export const GET_MYCOINS_DATA_SUCCESS = 'GET_MYCOINS_DATA_SUCCESS'
export const GET_HISTORIC_DATA_ERROR = 'GET_HISTORIC_DATA_ERROR'
export const GET_HISTORIC_DATA_PENDING = 'GET_HISTORIC_DATA_PENDING'
export const GET_HISTORIC_DATA_SUCCESS = 'GET_HISTORIC_DATA_SUCCESS'

function portfolioReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}

export default portfolioReducer