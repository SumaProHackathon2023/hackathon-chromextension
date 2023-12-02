import React from "react";
import { createRoot } from "react-dom/client";
import EventList from "./FetchFirestore";
import "./index.css";

function Popup() {
	return (
		<>
			<EventList />
		</>
	);
}
createRoot(document.getElementById("root") as HTMLElement).render(<Popup />);

