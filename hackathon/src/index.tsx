import ReactDOM from 'react-dom';
import EventList from './FetchFirestore';


function Popup() {
    return (
        <>
            <h1>Show Data</h1>
                <EventList />
        </>
    )
}

ReactDOM.render(<Popup />, document.getElementById('root'));

