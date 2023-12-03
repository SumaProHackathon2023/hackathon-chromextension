/* eslint-disable @typescript-eslint/no-unused-vars */
import {
	collection,
	limit,
	query,
	QueryDocumentSnapshot,
	type DocumentData,
	type FirestoreDataConverter,
	type WithFieldValue,
} from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import { firestore } from "./firebase-init";

/**
 * date:Dateのとこ、実態はtimeStampなのでConverterでなんとかしないといけない。
 */
type Event = {
	companyName: string;
	date: Date;
	title: string;
	webLink: string;
};

const Converter: FirestoreDataConverter<Event> = {
	fromFirestore(snapshot: QueryDocumentSnapshot): Event {
		const data = snapshot.data();
		/*
		 * このあたりでTimeStamp -> Dateの変換を行う処理を書く。
		 */
		return {
			companyName: data.companyName,
			date: data.date,
			title: data.title,
			webLink: data.webLink,
		};
	},
	// ここはどうしようか。ないといけないので置いてるにすぎない...
	toFirestore: function (
		modelObject: WithFieldValue<Event>,
	): WithFieldValue<DocumentData> {
		throw new Error("Function not implemented.");
	},
};

export default function EventList({
	LimitNumber,
	ContentView,
}: {
	LimitNumber: number;
	ContentView: boolean;
}) {
	const EventCollect = query(
		collection(firestore, "event"),
		limit(LimitNumber),
	).withConverter<Event>(Converter);
	const [snapshot, loading, error] = useCollection(EventCollect);
	return (
		<>
			<h1 className="text-xl  text-center">最新イベント情報</h1>
			{error && (
				<strong style={{ color: "red" }}>Error: {JSON.stringify(error)}</strong>
			)}
			{loading && <span className="loading loading-spinner loading-lg" />}
			{snapshot && (
				<ul
					className="container mx-auto p-4 w-56 divide-y-[1px] divide-blue-200"
					style={{ listStyle: "none", fontFamily: "sans-serif" }}>
					{snapshot?.docs.map((snap, i) => {
						console.log(snap.data().webLink);
						return (
							<li
								className="py-5 "
								style={{
									paddingTop: "0.75rem",
									paddingBottom: "0.75rem",
								}}
								key={snap.data().title}>
								<a
									onClick={async (event) => {
										event.preventDefault();
										if (!ContentView) {
											await chrome.tabs.create({ url: snap.data().webLink });
										} else {
											window.open(snap.data().webLink);
										}
									}}>
									{snap.data().title}
								</a>
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}
