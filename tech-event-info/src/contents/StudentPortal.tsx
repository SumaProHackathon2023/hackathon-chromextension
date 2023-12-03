import type { PlasmoCSConfig, PlasmoCSUIAnchor } from "plasmo";
import React from "react";
import { useEffect } from "react";
import "../style.css"

export const config: PlasmoCSConfig = {
    matches: ["https://navi.mars.kanazawa-it.ac.jp/portal/student/*"]
}
const CSUIConfig: PlasmoCSUIAnchor = {
    type: "overlay",
    element: document.body
}


export default function Content(){
    const PlasmoElement = document.getElementsByTagName("plasmo-csui")[0];
    /* PlasmoElement.classList.add("FadeUp"); */
    const onClose = () => {
        PlasmoElement.remove();
    }
    useEffect(() => {
        PlasmoElement.classList.add("FadeUp");
    },[])
    return (
            <article id="append-root"
                style={{
                    height: "75vh",
                    width: "75vw",
                    margin: "auto",
                    inset: "auto 0",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "rbga(255,255,255,0.5)",
                }} className="FadeUp">
                <div id="glass" style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: "15px",
                borderBottomColor: "rgba(255,255,255,0.2)",
                borderRightColor: "rgba(255,255,255,0.2)",
                boxShadow: "0 5px 20px rgba(255, 152, 79, 0.5)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
            }}>
                    {/*CSSをタグ内に直書きはあまり綺麗ではないので修正しよう*/}
                    <button 
                        onClick={() => {onClose()}}
                        id="close">
                        とじる
                    </button>
                    <h1 style={{fontSize: "3em",textAlign: "center",}}>学外イベントに参加しよう！！</h1>
                    <ul>
                    {/*仮置きのデータ*/}
                    {["学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！","学内イベントに参加しよう！"].map((str,i) => {
                        return (
                            <li key={i}>{str}<br/></li>
                        )
                    })}
                    </ul>
                </div>
            </article> 
    )
}
