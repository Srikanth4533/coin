import { Cell } from 'components'
import { getArrow, roundToNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnTwentyFourHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)
  if (!props.twentyFourHourChange) {
    return '-'
  }

  let twentyFourHourChangeAdjusted = roundToNumber(props.twentyFourHourChange, 2)
  return (
    <Cell number={props.twentyFourHourChange || '-'}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.twentyFourHourChange || '-')}
          {twentyFourHourChangeAdjusted}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnTwentyFourHourChange
