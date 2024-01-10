"use client"

import { useSearchParams } from "next/navigation"
import './commerce_web.css'
import Image from "next/image"

export default function Commerce_web() {
    const searchParams = useSearchParams()
    const query = searchParams.get('data')

    const data = JSON.parse(query)
    
    return (
        <div className="fondo h-screen w-full flex mx-auto absolute">
            <div className="left-zone-comm w-1/2 mt-5 pl-16">
                <span className="web-title">{data.title}</span>
                <Image
                    src={data.url}
                    width={450}
                    height={500}/>
            </div>

            <div className="right-zone-comm w-1/2 p-8 pr-14">
                <div className="comm-border absolute"></div>
                <p className="web-desc p-5">{data.desc}</p>
            </div>
        </div>
    )
}