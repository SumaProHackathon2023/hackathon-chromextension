import { limit,collection,query,DocumentData,FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { firestore } from "./firebase-init";
import {useCollection} from "react-firebase-hooks/firestore"
/**
* date:Dateのとこ、実態はtimeStampなのでConverterでなんとかしないといけない。
*/
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
        /*
        * このあたりでTimeStamp -> Dateの変換を行う処理を書く。
        */
        return {
            companyName: data.companyName,
            date: data.date,
            title: data.title,
            weblink: data.weblink
        };
    },
    // ここはどうしようか。ないといけないので置いてるにすぎない...
    toFirestore: (function (modelObject: WithFieldValue<Event>): WithFieldValue<DocumentData> {
        throw new Error("Function not implemented.");
    })
}


export default function EventList() {
    const EventCollect = query(collection(firestore, "event"),limit(3)).withConverter<Event>(Converter)
    const [snapshot,loading,error] = useCollection(EventCollect)

    return (
        <>
            <h1 className='text-xl'>Join Event!</h1>
            {error && <strong style={{color: "red"}}>Error: {JSON.stringify(error)}</strong>}
            {loading && <span className="loading loading-spinner loading-lg" />}
            {snapshot && <ul className="menu p-3 w-56 rounded-box">
                {
                    snapshot?.docs.map((snap) => {
                        const data = snap.data()
                        return (
                            <li className="mb-3" key={data.title}>
                                <a className="babge" href={data.weblink}>{data.title}</a>
                            </li>
                        )
                    })
                }
        </ul>}
        </>
        
    )
}
