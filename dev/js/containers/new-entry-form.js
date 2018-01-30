import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {newEntry} from '../actions/new-entry-action'


class NewEntryForm extends React.Component{
    constructor() {
        super();
        this.state = {
            formValues: {
                name:'',
                time:''
            }
        }
        this.handleChange= this.handleChange.bind(this);        
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;

        this.setState({formValues})
    }

    onClickSubmit(){
        this.props.newEntry({
            name:this.state.formValues.name,
            time:this.state.formValues.time
        });
        this.setState({
            formValues:{
                name:'',
                time:''
            }
        })
    }

    render() {

        if(this.props.entriesList.todaysWinner.length==2){
            return (
                <div className="game-over-msg text-center">
                    <h2>The game is over for today</h2>
                </div>
            )
        }

        return (
            <div className="new-entry-form">
            
            <div className="container form-horizontal small">
            <div className="row">
                    <label className="control-label col-sm-2">UserName:</label>
                    <div className="col-sm-10">
                        <input className="form-control" type="text" onChange={this.handleChange} name="name" value={this.state.formValues["name"]}/>
                    </div>
            </div>
                <div className="form-group row">
                    <label className="control-label col-sm-2">Time:</label>
                    <div className="col-sm-10">
                       <input className="form-control" type="time"  onChange={this.handleChange} name="time" value={this.state.formValues["time"]}/>                        
                    </div>

            </div>
                <button className="btn btn-primary btn-lg submit-btn" onClick={this.onClickSubmit}>Submit</button>
            </div>
            
            </div>
        );
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({newEntry: newEntry}, dispatch);
}

function mapStateToProps(state){
    return {
        entriesList: state.entriesList
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(NewEntryForm);