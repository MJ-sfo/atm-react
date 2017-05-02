import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props)  //  solutions has props in super paramater
    this.state = {
      balance: 0
    }
  }  //  constructor (props)

  handleDepositClick(e) {
    e.preventDefault()  // It is good practice to still prevent default behavior
    let depositBal = parseInt(this.refs.money.value, 10) ;  // radax 10
    let firstBalance = this.state.balance;   
    let newDepoBalance = firstBalance + depositBal;
    console.log("final bal ", newDepoBalance);
    this.setState=({
      balance: newDepoBalance 
      })
    // empty out the text box in this component
    this.refs.money.value = '';
  }  //  handleDepositClick

  handleWithdrawClick(e) {
    console.log(this);
    e.preventDefault() 
    let withdrawBal = parseInt(this.refs.money.value, 10)  ;
    let oldBalance = this.state.balance;  
    let newBalance = oldBalance - withdrawBal;
    if (newBalance < 0) {
      newBalance = 0
    }
    console.log("after subtraction is:", newBalance);
    this.setState=({
      balance: newBalance 
      })
    this.refs.money.value = '';
  }  //  handleWithdrawClick

  render() {
      // set the default class to `balance` for the balanceClass.
    let balanceClass = 'balance';
    // if the balance is 0, then add the class zero to balanceClass
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    } 
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" ref="money" placeholder="enter amount" />
        <input type="button" onClick={(e) => this.handleDepositClick(e)} value="Deposit" />
        <input type="button" onClick={(e) => this.handleWithdrawClick(e)}     value="Withdraw" />
      </div>
    )
  }  //  render()
}  // export default class 
