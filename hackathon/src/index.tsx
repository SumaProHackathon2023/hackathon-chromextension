import ReactDOM from 'react-dom';
import EventList from './FetchFirestore';


function Popup() {
    return (
        <>
            <h1 className='text-2xl'>Show Data</h1>
            <EventList />
        </>
    )
}

ReactDOM.render(<Popup />, document.getElementById('root'));

