import React, { Component } from 'react';
import {checkIfGameLost} from '../actions/check-if-game-lost';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        6000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.props.checkIfGameLost();
      
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }



function matchDispatchToProps(dispatch){
  return bindActionCreators({checkIfGameLost: checkIfGameLost}, dispatch);
}

export default connect(null,matchDispatchToProps)(Clock);