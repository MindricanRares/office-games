import React, { Component } from 'react';
import {connect} from 'react-redux';
import {raduArrived} from '../actions/radu-arrived-action';
import {bindActionCreators} from 'redux';


class FinishForm extends React.Component{

    render() {
        if(this.props.entriesList.todaysWinner.length!=1){
            return(
                <div className="winner-message">
                    <p>Today Radu arrived at {this.props.entriesList.todaysWinner[1].actualTime}</p>
                    <p>The winner is {this.props.entriesList.todaysWinner[1].name} with the time {this.props.entriesList.todaysWinner[1].time}</p>
                </div>
            )
        }
        return (
            <div>
                <button className='btn btn-primary btn-lg radu-arrived-btn' onClick={this.props.raduArrived}>Radu arrived</button>
            </div>
        );
    }
    
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({raduArrived: raduArrived}, dispatch);
}
function mapStateToProps(state) {
    return {
        entriesList: state.entriesList

    };
}

export default connect(mapStateToProps,matchDispatchToProps)(FinishForm);

