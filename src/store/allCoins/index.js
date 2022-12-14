
const initialState = {
    categoryId: 'cryptocurrency',
    config: {
        num: {
            sortBy: false,
            order: 0,
            key: '#'
        },
        name: {
            sortBy: 'id',
            sortByAsc: false,
            order: 1,
            key: 'Name',
        },
        price: {
            sortBy: 'current_price',
            sortByAsc: false,
            order: 2,
            key: 'Price',
        },
        '1h': {
            sortBy: 'price_change_percentage_1h_in_currency',
            sortByAsc: false,
            order: 3,
            key: '1h'
        },
        '24h': {
            sortBy: 'price_change_percentage_24h_in_currency',
            sortByAsc: false,
            order: 4,
            key: '24h',
        },
        '7d': {
            sortBy: 'price_change_percentage_7d_in_currency',
            sortByAsc: false,
            order: 5,
            key: '7d',
        },
        '24hVolumeMarketCap': {
            sortBy: false,
            order: 6,
            key: '24h Vol / Market Cap'
        },
        circulatingTotalSupply: {
            sortBy: false,
            order: 7,
            key: 'Circulating / Total Sup',
        },
        last7d: {
            sortBy: false,
            order: 8,
            key: 'Last 7d'
        }
    },
    apiParams: {
        page: 1,
        perPage: 50,
        orderBy: 'market_cap',
        orderDir: 'desc'
    },
    chartOption: 'bitcoin',
    coinsData:[],
    dataLabels: [],
    timeInterval: 30,
    latestPrice:null,
    latestVolume: null,
    priceDataPoints: [],
    volumeDataPoints: [],
    isChartsLoading:false,
    isCoinsLoading:false,
    chartsError:false,
    coinsError:false
}


export const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
export const CHANGE_CHART_OPTION = 'CHANGE_CHART_OPTION'
export const GET_COINS_DATA_ERROR = 'GET_COINS_DATA_ERROR'
export const GET_COINS_DATA_PENDING = 'GET_COINS_DATA_PENDING'
export const GET_COINS_DATA_SUCCESS = 'GET_COINS_DATA_SUCCESS'
export const GET_CHARTS_DATA_ERROR = 'GET_CHARTS_DATA_ERROR'
export const GET_CHARTS_DATA_PENDING = 'GET_CHARTS_DATA_PENDING'
export const GET_CHARTS_DATA_SUCCESS = 'GET_CHARTS_DATA_SUCCESS'
export const SET_ORDER_BY = 'SET_ORDER_BY'
export const SET_ORDER_DIR = 'SET_ORDER_DIR'
export const SET_PAGE = 'SET_PAGE'
export const SET_PER_PAGE = 'SET_PER_PAGE'
export const SET_TIME_INTERVAL = 'SET_TIME_INTERVAL'
export const SORT_BY = 'SORT_BY'

function allCoinsReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CATEGORY:
            return {
                ...state,
                categoryId: action.payload
            }
        case CHANGE_CHART_OPTION:
            return {
                ...state,
                chartOption: action.payload
            }
        case GET_COINS_DATA_ERROR:
            return {
                ...state,
                coinsError: action.payload,
                isCoinsLoading: false
            }

        case GET_COINS_DATA_PENDING:
            return {
                ...state,
                isCoinsLoading: true
            }
        
        case GET_COINS_DATA_SUCCESS:
            return {
                ...state,
                coinsData: action.payload,
                isCoinsLoading: false,
                coinsError: false
            }
            
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

        case SET_ORDER_BY:
            let { orderBy } = state.apiParams
            if(orderBy === 'market_cap') {
                orderBy = 'volume'
            }else {
                orderBy = 'market_cap'
            }
            return {
                ...state,
                apiParams: {
                    ...state.apiParams,
                    orderBy
                }
            }

        case SET_ORDER_DIR:
            let { orderDir } = state.apiParams
            if(orderDir === 'desc') {
                orderDir = 'asc'
            }else {
                orderDir = 'desc'
            }
            return {
                ...state,
                apiParams: {
                    ...state.apiParams,
                    orderDir
                }
            }

        case SET_PAGE:
            let { page } = state.apiParams
            page = page + action.payload
            if(page === 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                apiParams: {
                    ...state.apiParams,
                    page,
                }
            }

        case SET_PER_PAGE:
            return {
                ...state,
                apiParams: {
                    ...state.apiParams,
                    perPage: action.payload
                }
            }

        case SORT_BY:
            const { sortBy, sortByAsc } = action.payload
            const configProperty = Object.entries(state.config).find(
                (ele) => ele[1].sortBy === sortBy
            )[0]
            return {
                ...state,
                coinsData: state.coinsData.sort((a, b) =>
                    sortByAsc 
                    ?
                    a[sortBy] < b[sortBy] ? -1 : 1
                    : b[sortBy] < a[sortBy] ? -1 : 1
                ),
                config: {
                    ...state.config,
                    [configProperty] : {
                        ...state.config[configProperty],
                        sortByAsc
                    }
                }
            }

        default:
            return state
    }
}

export default allCoinsReducer