import ReactDOM from 'react-dom';
import React from 'react';
import EventList from './FetchFirestore.js';

function Popup() {
    return (
        <React.StrictMode>
            <EventList />
        </React.StrictMode>
    )
}

ReactDOM.render(<Popup />, document.getElementById('root'));

