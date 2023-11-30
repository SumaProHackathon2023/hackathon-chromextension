import { collection,DocumentData,getDocs } from "firebase/firestore";
import { useEffect, useState } from "react"
import { firestore } from "@/firebase-init";
import { Suspense } from 'react'
/* import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] }) */

export default function Home() {
  const [eventDatas,setEventDatas] = useState<DocumentData[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const EventCollection = collection(firestore,"event")    
            const fetchData = (await getDocs(EventCollection)).docs.map((data) => {return data.data()})
            setEventDatas(fetchData)
        }
        fetchData()
    },[])
    return (
        <>
            {eventDatas.map((event: DocumentData,i: number) => {
                return (
                    <div key={event.title}>
                        <p>{i}</p>
                        <h1>{event.weblink}</h1>
                        <p>{event.title}</p>
                        <p>{event.date}</p>
                        <p>{event.companyName}</p>
                    </div>
                )
            })}
        </>
    )
}
