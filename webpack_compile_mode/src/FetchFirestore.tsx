/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { limit,collection,query,DocumentData,FirestoreDataConverter, QueryDocumentSnapshot, WithFieldValue } from "firebase/firestore";
import { firestore } from "./firebase-init";
import {useCollection} from "react-firebase-hooks/firestore";
type Event = {
    companyName: string,
    date: Date,
    title: string,
    webLink: string
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
			webLink: data.webLink
		};
	},
	toFirestore: (function (modelObject: WithFieldValue<Event>): WithFieldValue<DocumentData> {
		throw new Error("Function not implemented.");
	})
};


export default function EventList() {
	const EventCollect = query(collection(firestore, "event"),limit(3)).withConverter<Event>(Converter);
	const [snapshot,loading,error] = useCollection(EventCollect);
	return (
		<>
			<h1 className='text-xl'>Join Event!</h1>
			{error && <strong style={{color: "red"}}>Error: {JSON.stringify(error)}</strong>}
			{loading && <span className="loading loading-spinner loading-lg" />}
			{snapshot && <ul className="menu p-3 w-56 rounded-box">
				{
					snapshot?.docs.map((snap,i) => {
						console.log(snap.data().webLink);
						return (
							<li className="mb-3" key={snap.data().title}> 
								<a 
									id="event-link"
									className="badge"
									onClick={async (event) => {
										event.preventDefault();
										await (chrome.tabs.create({url: snap.data().webLink}));
									}}
								>
									{snap.data().title} {snap.data().webLink} 
								</a>
							</li>
						);
					})
				}
			</ul>
			}
		</>
	);
}
