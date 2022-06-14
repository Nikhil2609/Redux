import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from './state magagement/actions/counterActions';
import DisplayCounter from './pages/displaycounter';

class App extends Component {

  // for functioal component
  // count = useSelector(state => state.counter);
  // dispath = useDispatch();
  IncrementCount = () => this.props.Increment();
  DecrementCount = () => this.props.Decrement();

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h4> Hurrey!!! Deploy My First React APP</h4>
        </div>
        <p className="App-intro">
          <h2>APP Parent Component</h2>

          This is my first react redux app with mutiple reducer

          <div>
            <div>user detail</div>
            name: <b>{this.props.userDetail.name}</b> <br></br>
            address: <b>{this.props.userDetail.address}</b> <br></br>
          </div>

          <br></br>

          Count value : <b>{this.props.counter.count}</b>
          <br></br>

          <button onClick={this.IncrementCount}> Increment </button> &nbsp;&nbsp;&nbsp;
          <button onClick={this.DecrementCount}> Decrement </button>

          <br></br>
        </p>

        <DisplayCounter />
      </div>
    );
  }
}

// this function bind is used to bind global state and we can display specific state
const mapStateToProps = state => ({
  // userDetail: state.userDetail   where userDetail is a name by which we can user state of store
  // like this name of user this.props.userDetail.name
  // this state.counter => where counter is name of reducer define in combinereducer({}) method
  counter: state.counter,
  userDetail: state.userInfo
});

// this function bind is used to bind all reducer function
const mapDispatchToProps = () => ({
  Increment,
  Decrement
});

export default connect(mapStateToProps, mapDispatchToProps())(App);
