import { NextResponse } from 'next/server'
import { readFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/users.json"))
        const user = users.filter((user) => user.email == data.email && user.passwd == data.passwd)
        if (user.length > 0) {
            return NextResponse.json(user)
        } else {
            return NextResponse.json({message: "Usuario no existe...", status: 404})
        }
    } catch(e){  
        return NextResponse.json({message: "Usuario no existe...", status: 404})
    }
}