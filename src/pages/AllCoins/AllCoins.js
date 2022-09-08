import { ChartsDisplay, ChartSlider, CoinsTable, LoadingBox } from 'components'
import React, { useEffect } from 'react'
import queryString from 'query-string'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { getChartsData, getCoinsData, setTimeInterval } from 'store/allCoins/actions'
import { keyGen, screenSizeWidth, timeIntervals } from 'utils'
import { ChartsWrapper, CoinsContainer, Container, Content, DataSelectContainer, DataSelectItem, H1 } from './AllCoins.css'

const AllCoins = () => {

  const { coinsData, isCoinsLoading, dataLabels, priceDataPoints, volumeDataPoints, isChartsLoading, timeInterval, apiParams } = useSelector(state => state.allCoins)
  const { currency } = useSelector(state => state.config)

  const dispatch = useDispatch()

  useEffect(() => {
    // const parsed = queryString.parse(window.location.search, { parseBooleans : true })
    dispatch(getCoinsData())
  },[currency, apiParams])

  useEffect(() => {
    dispatch(getChartsData())
  }, [currency, timeInterval])
  return (
     <Container>
      <Content>
      <H1>Overview</H1>
        <Media
          queries={{
            desktopS: screenSizeWidth.desktopS,
            mobile: screenSizeWidth.mobile
          }}
        >
          {(matches) => (
            <>
            {matches.desktopS && (
            <ChartsWrapper>
              <ChartsDisplay
                data={coinsData}
                dataLabels={dataLabels}
                dataPoints={priceDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
                label="Price"
                legendTitle="Price"
                type="Line"
              />
              <ChartsDisplay
                data={coinsData}
                dataLabels={dataLabels}
                dataPoints={volumeDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
                label="Volume"
                legendTitle="Volume 24h"
                type="Bar"
              />
            </ChartsWrapper>
            )}
            {matches.mobile && (
              <ChartSlider
                data={coinsData}
                dataLabels={dataLabels}
                priceDataPoints={priceDataPoints}
                volumeDataPoints={volumeDataPoints}
                isLoading={isChartsLoading || isCoinsLoading}
              />
            )}
            </>
          )}
        </Media>

        <DataSelectContainer>
          {Object.keys(timeIntervals).map((interval) => {
            return (
              <DataSelectItem
                onClick={
                  () => dispatch(setTimeInterval(timeIntervals[interval]))
                }
                highlight={timeInterval === timeIntervals[interval]}
                key={keyGen()}
              >
                {interval}
              </DataSelectItem>
            )
          })}
        </DataSelectContainer>

        <CoinsContainer>
          {(isCoinsLoading || isChartsLoading || coinsData.length < 1) && <LoadingBox height={250} />}
          {coinsData.length > 1 && !isChartsLoading && !isCoinsLoading &&
            (
              <CoinsTable 
            data={coinsData} 
            isLoading={isChartsLoading || isCoinsLoading}
          />
            )
          }
        </CoinsContainer>
      </Content>
     </Container>
  )
}

export default AllCoins