// Write your code here

import {Component} from 'react'
import './index.css'
import Denomination from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  increase = value => {
    this.setState(prev => ({count: prev.count - value}))
  }

  render() {
    const {denominationsList} = this.props
    console.log(denominationsList)
    const {count} = this.state
    return (
      <div className="cashContainer">
        <div className="cardContiner">
          <div className="user">
            <button className="userProfile">S</button>
            <p className="userName">Sarah Williams</p>
          </div>
          <div className="balanceCard">
            <p className="balancepara">Your Balance</p>
            <div className="moneycard">
              <p className="value">{count}</p>
              <p className="rupe">In Rupees</p>
            </div>
          </div>
          <p className="with">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items">
            {denominationsList.map(each => (
              <Denomination
                item={each}
                key={each.id}
                increase={this.increase}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
