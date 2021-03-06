import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createDate} from '../utils';

class EntriesList extends React.Component{
    
    render() {
        
        
        let elist=[];
        const currentTime=createDate(this.props.entriesList.currentTime);
        if(this.props.entriesList.entries.length==1){
            return (
                <div>
                    <ul className="list-group">
                         <li className="list-group-item" key={-1}>{this.props.entriesList.entries[0].name} {this.props.entriesList.entries[0].time}</li>
                    </ul>
                </div>
            );
        }

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
            elist.push(<li className="list-group-item" key={i+1}>{nextEntry.name} {nextEntry.time}</li>)
            
            
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
