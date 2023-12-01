import { collection,DocumentData,FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { firestore } from "./firebase-init.js";
import {useFirestoreQuery} from "@react-query-firebase/firestore"

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
    const EventCollect = collection(firestore, "event").withConverter<Event>(Converter)
    const EventQuery = useFirestoreQuery<Event>(["event"],EventCollect,{
        subscribe: true
    })
    if(EventQuery.isLoading){
        return <div>loading...</div>
    }
    const snapshot = EventQuery.data
    return (
        <ul>
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
        </ul>
    )
}
