import { collection,query,DocumentData,FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { firestore } from "./firebase-init";
import {useCollection} from "react-firebase-hooks/firestore"
type Event = {
    companyName: string,
    date: Date,
    title: string,
    weblink: string
}


const Converter: FirestoreDataConverter<Event> = {
    fromFirestore(
        snapshot: QueryDocumentSnapshot
    ): Event {
        const data = snapshot.data();
        return {
            companyName: data.companyName,
            date: data.date,
            title: data.title,
            weblink: data.weblink
        };
    },
    toFirestore: (function (modelObject: WithFieldValue<Event>): WithFieldValue<DocumentData> {
        throw new Error("Function not implemented.");
    })
}


export default function EventList() {
    const EventCollect = query(collection(firestore, "event").withConverter<Event>(Converter))
    const [snapshot,loading,error] = useCollection(EventCollect)

    return (
        <>
            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection Loading...</span>}
            {snapshot && <ul>
                {
                    snapshot?.docs.map((snap) => {
                        const data = snap.data()
                        return (
                            <>
                                <li key={snap.id}>{data.title}</li>
                            </>
                        )
                    })
                }
        </ul>}
        </>
        
    )
}
