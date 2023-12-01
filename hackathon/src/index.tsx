import ReactDOM from 'react-dom';
import EventList from './FetchFirestore';
import "./index.css"

function Popup() {
    return (
        <>
            <h1 className='text-xl'>Join Event!</h1>
            <EventList />
        </>
    )
}

ReactDOM.render(<Popup />, document.getElementById('root') as HTMLElement);

