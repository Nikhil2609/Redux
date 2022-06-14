import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Increment, Decrement, IncrementByAmount } from "../state magagement/actions/counterActions";
import { updateUserInfo } from "../state magagement/actions/userInfoActions";
import store from '../state magagement/store';

class DisplayCounter extends Component {
    constructor(props) {
        super(props);
        console.log("states:::", store.getState());
    }

    IncrementCounterFromDisplay = () => {
        this.props.inc();
    }

    DecrementCounterFromDisplay = () => {
        this.props.dec();
    }

    DecrementCounterByAmount = (amount) => {
        this.props.IncrementByAmount(amount);
    }

    updateUserInfoation = () => {
        this.props.updateUserInfo();
    }

    render() {
        return (
            <div>
                <h3>Counter Child Component</h3>
                <div>
                    <div>user detail</div>    <br></br>
                    <div>name : <b>{this.props.userDetail.name}</b></div>
                    <div>address: <b>{this.props.userDetail.address}</b></div>
                    <button onClick={this.updateUserInfoation}>Update user information</button>
                </div>
                <br></br>


                <div> 
                    displaycounter
                    <div>Count value:  <b>{this.props.counter.count}</b></div>
                    <button onClick={this.IncrementCounterFromDisplay}>Increment from another file</button> &nbsp;&nbsp;
                    <button onClick={this.DecrementCounterFromDisplay}>Decrement from another file</button> &nbsp;&nbsp;
                    <button onClick={() => this.DecrementCounterByAmount(10)}>Increment By 10</button>
                </div>
            </div>
        )
    }
}

// this function bind is used to bind global state and we can display specific state
const mapStateToProps = state => ({
    counter: state.counter,
    userDetail: state.userInfo
});

// this function bind is used to bind all reducer function
const mapDispatchToProps = () => ({
    inc: Increment,   // it's alias name of Increment function : inc
    dec: Decrement,
    IncrementByAmount,
    updateUserInfo
});

export default connect(mapStateToProps, mapDispatchToProps())(DisplayCounter);



