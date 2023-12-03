import type { PlasmoCSConfig, PlasmoCSUIAnchor} from "plasmo";
import React, { useEffect } from "react";

import EventList from "../Components/FetchFirestore";

export const config: PlasmoCSConfig = {
	matches: ["https://navi.mars.kanazawa-it.ac.jp/portal/student/*"],
};
export const CSUIConfig: PlasmoCSUIAnchor = {
	type: "overlay",
	element: document.getElementsByClassName("TOP").item(0) as HTMLElement,
};

export default function Content() {
	const PlasmoElement = document.getElementsByTagName(
		"plasmo-csui",
	)[0] as HTMLElement;
	/* PlasmoElement.classList.add("FadeUp"); */
	const onClose = () => {
		PlasmoElement.remove();
		document.body.style.filter = "none";
	};
	useEffect(() => {
		PlasmoElement.style.animationName = "FadeUp";
		PlasmoElement.style.animationDuration = "3s";
		PlasmoElement.style.animationFillMode = "forwards";
		PlasmoElement.style.animationTimingFunction = "ease-in-out";
		PlasmoElement.style.position = "fixed";
		PlasmoElement.style.height = "75vh";
		PlasmoElement.style.width = "75vw";
		PlasmoElement.style.top = "30%";
		PlasmoElement.style.left = "30%";
		PlasmoElement.style.zIndex = "1000";
		const InnerStyleElement = document.createElement("style");
		InnerStyleElement.innerHTML = `
            @keyframes FadeUp {
                from {
                    opacity: 0;
                    transform: translateY(100px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0px);
                }
            }`;
		PlasmoElement.appendChild(InnerStyleElement);
		document.body.style.filter = "blur(8px)";
	}, []);
	return (
		<article
			id="append-root"
			style={{
				backgroundColor: "rgba(90,209,215,0.3)",
				backdropFilter: "blur(64px)",
				boxShadow:
					"0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
				borderTopLeftRadius: "0.25rem",
				borderTopRightRadius: "0.25rem",
				borderColor: "rgb(148 163 184)",
				borderRadius: "0.5rem",
				borderLeftWidth: "1px",
				padding: "1.0rem",
			}}>
			<div>
				{/*CSSをタグ内に直書きはあまり綺麗ではないので修正しよう*/}
				<button
					onClick={() => {
						onClose();
					}}
					style={{ backgroundColor: "rgba(255,255,255,0)", border: "none" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z"></path>
					</svg>
				</button>
				<h1 style={{ fontSize: "3rem", textAlign: "center" }}>
					最新学外イベント情報！
				</h1>
				<EventList LimitNumber={5} ContentView={true} />
			</div>
		</article>
	);
}
