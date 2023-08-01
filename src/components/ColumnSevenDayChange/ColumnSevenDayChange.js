import { Cell } from 'components'
import { getArrow, roundToNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnSevenDayChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.sevenDayChange) {
    return '-'
  }
  let sevenDayChangeAdjusted = roundToNumber(props.sevenDayChange, 2)
  return (
    <>
      <Cell number={props.sevenDayChange}>
        {(currency !== props.symbol && (
          <>
            {getArrow(props.sevenDayChange)}
            {sevenDayChangeAdjusted}%
          </>
        )) || <span>-</span>}
      </Cell>
    </>
  )
}

export default ColumnSevenDayChange
