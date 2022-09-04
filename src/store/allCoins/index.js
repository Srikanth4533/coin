
const initialState = {
    dataLabels: [],
    timeInterval: 30,
    latestPrice:null,
    latestVolume: null,
    priceDataPoints: [],
    volumeDataPoints: [],
    isChartsLoading:false,
    chartsError:false,
}


export const GET_CHARTS_DATA_ERROR = 'GET_CHARTS_DATA_ERROR'
export const GET_CHARTS_DATA_PENDING = 'GET_CHARTS_DATA_PENDING'
export const GET_CHARTS_DATA_SUCCESS = 'GET_CHARTS_DATA_SUCCESS'
export const SET_TIME_INTERVAL = 'SET_TIME_INTERVAL'

function allCoinsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CHARTS_DATA_ERROR:
            return {
                ...state,
                chartsError: action.payload,
                isChartsLoading: false
            }

        case GET_CHARTS_DATA_PENDING:
            return {
                ...state,
                isChartsLoading: true
            }

        case GET_CHARTS_DATA_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isChartsLoading: false,
                chartsError: false
            }

        case SET_TIME_INTERVAL:
            return {
                ...state,
                timeInterval: action.payload
            }
        default:
            return state
    }
}

export default allCoinsReducer