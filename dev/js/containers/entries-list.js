import React, { Component } from 'react';
import {connect} from 'react-redux';

let createDate = (time) =>{
    const today=new Date();
    const todaysYear=today.getFullYear();
    const todaysMonth=today.getMonth();
    const todayDay=today.getDay();
    const entryHour=time.split(':')[0];
    const entryMin=time.split(':')[1];
    let day=new Date(todaysYear,todaysMonth,todayDay,entryHour,entryMin);
    return day;
}
class EntriesList extends React.Component{
    
    render() {
        // debugger;
        
        let elist=[];
        const currentTime=createDate(this.props.entriesList.currentTime);
        for (let i = 0; i < this.props.entriesList.entries.length-1; i++) {
            const entry = this.props.entriesList.entries[i];
            const nextEntry = this.props.entriesList.entries[i+1];

            const entryTime=createDate(entry.time);
            const nextEntryTime=createDate(nextEntry.time);            


            const entryLost=Math.abs(currentTime-entryTime)>Math.abs(currentTime-nextEntryTime)

             if(entryLost){
                elist.push(<li className="list-group-item entry-lost" key={i}>{entry.name} {entry.time} Sorry it appears you have lost</li>)
            }else{
                elist.push(<li className="list-group-item" key={i}>{entry.name} {entry.time}</li>)
            }
            
        }
        
        return (
            <div>
                <ul className="list-group">
                {elist}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        entriesList: state.entriesList
    };
}

export default connect(mapStateToProps)(EntriesList);
