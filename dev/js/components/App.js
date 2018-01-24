import React from 'react';
import EntriesList from '../containers/entries-list';
import NewEntryForm from '../containers/new-entry-form';
import Clock from '../containers/clock';
import FinishTime from '../containers/finish-time';
require('../../scss/style.scss');




const App = () => (
    <div className="app-containter text-center">
    <h1>Office Games</h1>
    <br/>
    <h2>When will Radu arrive</h2>
    <br/>
        <NewEntryForm/>
        <EntriesList/>        
        <FinishTime/>
    </div>
);

export default App;
