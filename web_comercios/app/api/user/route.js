import { NextResponse } from 'next/server'
import { writeFileSync, readFileSync } from 'fs';

export async function GET() {
    try {
        const user = JSON.parse(readFileSync('data/user.json', "utf-8"));

        return NextResponse.json(user);
    } catch (e) {
        return NextResponse.json({ message : "ERROR: No se pudo encontrar los datos del user", status : 404 });
    }
}

export async function POST(req) {
    const data = await req.json()
    console.log(data)

    const user = {
        role : data.role,
        email : data.email,
        passwd : data.passwd
    }

    writeFileSync('data/user.json', JSON.stringify([user]));

    return NextResponse.json({message: "Usuario guardado...", status : 200 })
}