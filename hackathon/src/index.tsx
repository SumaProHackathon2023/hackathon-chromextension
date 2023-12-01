import ReactDOM from 'react-dom';
import EventList from './FetchFirestore';
import "./index.css"

function Popup() {
    return (
        <>
            
            <EventList />
        </>
    )
}

ReactDOM.render(<Popup />, document.getElementById('root') as HTMLElement);

