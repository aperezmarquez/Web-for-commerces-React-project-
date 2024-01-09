"use client"

import { useSearchParams } from "next/navigation"

export default function Commerce_web() {
    const searchParams = useSearchParams()
    const query = searchParams.get('data')

    const data = JSON.parse(query)
    
    return (
        <div className="container">
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
        </div>
    )
}