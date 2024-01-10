import { NextResponse } from 'next/server'
import { readFileSync, writeFileSync } from 'fs';

export async function POST(request) {
    const data = await request.json()
    try{
        const users = JSON.parse(readFileSync("data/users.json"))
        if (data.changeEmail == undefined) {
            const user = users.filter((user) => user.email == data.email && user.passwd == data.passwd)
            if (user.length > 0) {
                return NextResponse.json(user)
            } else {
                return NextResponse.json({message: "Usuario no existe...", status: 404})
            }
        } else {
            const usersChange = users.filter((user) => user.email != data.changeEmail)
            const userToChange = users.filter((user) => user.email == data.changeEmail)[0]
            
            userToChange.email = data.email
            writeFileSync('data/users.json', JSON.stringify([...usersChange, userToChange]))
            return NextResponse.json(userToChange)
            
        }
    } catch(e){  
        return NextResponse.json({message: "Usuario no existe...", status: 404})
    }
}