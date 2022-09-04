import { ChartsDisplay, ChartSlider } from 'components'
import React, { useEffect } from 'react'
import Media from 'react-media'
import { useDispatch, useSelector } from 'react-redux'
import { getChartsData, setTimeInterval } from 'store/allCoins/actions'
import { screenSizeWidth, timeIntervals } from 'utils'
import { ChartsWrapper, Container, Content, DataSelectContainer, DataSelectItem, H1 } from './AllCoins.css'

const AllCoins = () => {

  const { dataLabels, priceDataPoints, volumeDataPoints, isChartsLoading, timeInterval } = useSelector(state => state.allCoins)
  const { currency } = useSelector(state => state.config)

  const dispatch = useDispatch()
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
                dataLabels={dataLabels}
                dataPoints={priceDataPoints}
                isLoading={isChartsLoading}
                label="Price"
                legendTitle="Price"
                type="Line"
              />
              <ChartsDisplay
                dataLabels={dataLabels}
                dataPoints={volumeDataPoints}
                isLoading={isChartsLoading}
                label="Volume"
                legendTitle="Volume 24h"
                type="Bar"
              />
            </ChartsWrapper>
            )}
            {matches.mobile && (
              <ChartSlider
                dataLabels={dataLabels}
                priceDataPoints={priceDataPoints}
                volumeDataPoints={volumeDataPoints}
                isLoading={isChartsLoading}
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
              >
                {interval}
              </DataSelectItem>
            )
          })}
        </DataSelectContainer>
      </Content>
     </Container>
  )
}

export default AllCoins