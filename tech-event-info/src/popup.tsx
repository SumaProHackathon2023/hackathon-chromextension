import "./style.css"
import EventList from "~/Components/FetchFirestore"
import React, { useEffect } from "react"
export default function IndexPopup(){
  useEffect(() => {document.getElementsByTagName("html").item(0).style.backgroundColor = "white"}  ,[])
  return  <EventList LimitNumber={3} ContentView={false} />
}