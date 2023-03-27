// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominations, getDenominationValue} = props
  const {value} = denominations

  const onDenomination = () => {
    getDenominationValue(value)
  }
  return (
    <li className="denomination-card-container">
      <button type="button" className="btn-value" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
