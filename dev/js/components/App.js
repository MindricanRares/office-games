import React from 'react';
import EntriesList from '../containers/entries-list';
import NewEntryForm from '../containers/new-entry-form';
import Clock from '../containers/clock';
import FinishTime from '../containers/finish-time';
require('../../scss/style.scss');




const App = () => (
    <div className="app-containter text-center">
       <Clock/>
        <NewEntryForm/>
        <EntriesList/>        
        <FinishTime/>
    </div>
);

export default App;
