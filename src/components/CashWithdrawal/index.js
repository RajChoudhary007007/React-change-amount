import {Component} from 'react'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onChangeAmt50 = () => {
    this.setState(privState => ({amount: privState.amount - 50}))
  }

  onChangeAmt100 = () => {
    this.setState(privState => ({amount: privState.amount - 100}))
  }

  onChangeAmt200 = () => {
    this.setState(privState => ({amount: privState.amount - 200}))
  }

  onChangeAmt500 = () => {
    this.setState(privState => ({amount: privState.amount - 500}))
  }

  render() {
    const {amount} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <div className="profile-name">
            <h1 className="profile-sub-heading">S</h1>
            <h1 className="profile-main-heading">Sarah Williams</h1>
          </div>

          <div className="balance-profile">
            <h1 className="your-balance"> Your Balance</h1>
            <h1 className="your-bal-2000">{amount}</h1>
          </div>

          <p className="rupees">inRupees</p>
          <h1 className="withdraw">Withdraw</h1>
          <h1 className="choose-sum">CHOOSE SUM (IN RUPEES)</h1>

          <div className="amount-container">
            <button
              type="button"
              className="button"
              onClick={this.onChangeAmt50}
            >
              50
            </button>
            <button
              type="button"
              className="button"
              onClick={this.onChangeAmt100}
            >
              100
            </button>
          </div>
          <div className="amount-container">
            <button
              type="button"
              className="button"
              onClick={this.onChangeAmt200}
            >
              200
            </button>
            <button
              type="button"
              className="button"
              onClick={this.onChangeAmt500}
            >
              500
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
