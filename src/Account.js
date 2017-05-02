import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props)  //  solutions has props in super paramater
    this.state = {
      balance: 0
    }
  }  //  constructor (props)
  handleWithdrawClick(e) {
    var withdrawBal = this.refs.money.value;
    console.log("withdrawBal is: ", withdrawBal);
    var oldBalance = this.state.balance;   //    this isn't working !
    console.log("this.state.balance is: ", oldBalance);
    var newBalance = oldBalance - withdrawBal;
    console.log("after subtraction is:", newBalance);
    this.setState=({
      balance: newBalance 
      })
    // })
  }  //  handleWithdrawClick
  handleDepositClick(e) {
    e.preventDefault()  // It is good practice to still prevent default behavior
    var depositBal = this.refs.money.value;
    var firstBalance = this.state.balance;   
    var newDepoBalance = firstBalance + depositBal;
    console.log("orig balance", firstBalance);
    console.log("final bal ", newDepoBalance);
    this.setState=({
      balance: newDepoBalance 
      })
    // empty out the text box in this component
    this.refs.amount.value = '';
  }  //  handleDepositClick

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
        <div className={balanceClass}>$0</div>
        <input type="text" ref="money" placeholder="enter amount" />
        <input type="button" onClick={(e) => this.handleDepositClick(e)} value="Deposit" />
        <input type="button" onClick={(e) => this.handleWithdrawClick(e)}     value="Withdraw" />
      </div>
    )
  }  //  render()
}  // export default class 
