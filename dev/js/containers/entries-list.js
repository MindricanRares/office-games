import React, { Component } from 'react';
import {connect} from 'react-redux';


class EntriesList extends React.Component{
    
    render() {
        const elist=this.props.entriesList.entries.map((entry,i)=>{
            return <li className="list-group-item" key={i}>{entry.name} {entry.time}</li>
        });
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
