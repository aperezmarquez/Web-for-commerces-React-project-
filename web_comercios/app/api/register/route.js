import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync('web_comercios/data/users.txt'))
        writeFileSync("web_comercios/data/users.txt", JSON.stringify([...users, data]))
    } catch(e){  
        writeFileSync("web_comercios/data/users.txt", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}