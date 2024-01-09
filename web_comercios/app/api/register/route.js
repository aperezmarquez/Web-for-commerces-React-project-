import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync('data/users.json'))
        writeFileSync("data/users.json", JSON.stringify([...users, data]))
    } catch(e){  
        writeFileSync("data/users.json", JSON.stringify([data]))
    }
    return NextResponse.json({message: "Guardando datos..."})
}