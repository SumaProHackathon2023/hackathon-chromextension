import "./style.css"
import EventList from "~/Components/FetchFirestore"
import React from "react"
export default function IndexPopup(){return  <EventList LimitNumber={3} ContentView={false} />}