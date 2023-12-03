import "./style.css";

import React, { useEffect } from "react";

import EventList from "~/Components/FetchFirestore";

export default function IndexPopup() {
	useEffect(() => {
		document.getElementsByTagName("html").item(0).style.backgroundColor =
			"white";
	}, []);
	return <EventList LimitNumber={3} ContentView={false} />;
}
