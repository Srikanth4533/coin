import { Cell } from 'components'
import { getArrow, roundToNumber } from 'utils'
import { useSelector } from 'react-redux'

const ColumnHourChange = (props) => {
  const { currency } = useSelector((state) => state.config)

  if (!props.hourChange) {
    return '-'
  }

  let hourChangeAdjusted = roundToNumber(props.hourChange, 2)
  return (
    <Cell number={props.hourChange}>
      {(currency !== props.symbol && (
        <>
          {getArrow(props.hourChange)}
          {hourChangeAdjusted}%
        </>
      )) || <span>-</span>}
    </Cell>
  )
}

export default ColumnHourChange
