// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  getDenominationValue = value => {
    const {currentBalance} = this.state
    if (currentBalance > value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    } else {
      console.log('No Balance')
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    const fullName = 'Divya Vasanthi'
    const firstChar = fullName.slice(0, 1)

    return (
      <div className="app-container">
        <div className="cash-card-container">
          <div className="header-container">
            <div className="profile-container">
              <p className="profile-logo">{firstChar}</p>
            </div>
            <p className="profile-name">{fullName}</p>
          </div>
          <div className="balance-card">
            <p className="balance-title">Your Balance</p>
            <p className="balance">
              {currentBalance}
              <br />
              <span className="balance-caption">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominations={eachDenomination}
                getDenominationValue={this.getDenominationValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
