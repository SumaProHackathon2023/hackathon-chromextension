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
            {error && <strong style={{color: "red"}}>Error: {JSON.stringify(error)}</strong>}
            {loading && <span className="loading loading-spinner loading-lg" />}
            {snapshot && <ul>
                {
                    snapshot?.docs.map((snap) => {
                        const data = snap.data()
                        return (
                            <article key={data.title}>
                                <h2>{data.title}</h2>
                                <p>{data.companyName}</p>
                                <p>{data.date.toISOString()}</p>
                                <a href={data.weblink}>{data.weblink}</a>
                            </article>
                        )
                    })
                }
        </ul>}
        </>
        
    )
}
