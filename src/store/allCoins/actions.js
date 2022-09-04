import axios from "axios"
import { GET_CHARTS_DATA_ERROR, GET_CHARTS_DATA_PENDING, GET_CHARTS_DATA_SUCCESS } from "."


export const getChartsData = () => {
    return async(dispatch, getState) => {
        const state = getState()
        const { currency } = state.config
        const { timeInterval } = state.allCoins

        try {
            dispatch({ type: GET_CHARTS_DATA_PENDING })
            let { data } = await axios(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${timeInterval}&interval=daily`)
            console.log(data)

            let prices = data.prices
            let latestPrice = prices[prices.length - 1][1]
            let priceDataPoints = prices.map((price) => price[1])
            let volumes = data.total_volumes
            let latestVolume = volumes[volumes.length - 1][1]
            let volumeDataPoints = volumes.map((volume) => volume[1])

            if(prices.length === timeInterval + 1) {
                prices.pop()
                volumes.pop()
            }

            let dataLabels = prices.map((price) => {
                let date = new Date(price[0])
                let day = date.getDate().toString()
                let month = (date.getMonth() + 1).toString()

                if(day.length === 1) {
                    day = '0' + day
                }
                if(month.length === 1) {
                    month = '0' + month
                }

                return `${month}-${day}-${date.getFullYear()}`
            })

            dispatch({
                type: GET_CHARTS_DATA_SUCCESS,
                payload: {
                    dataLabels,
                    latestPrice,
                    latestVolume,
                    priceDataPoints,
                    volumeDataPoints
                }
            })

        } catch (error) {
            dispatch({ 
                type: GET_CHARTS_DATA_ERROR,
                payload: error
             })
        }
    }
}