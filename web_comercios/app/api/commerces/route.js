// Hacer POST y GETS del commerce user aqui

import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function POST(request) {
    const data = await request.json();
    const file = await fs.readFile(process.cwd() + "/data/commerces.json", "utf-8")

    try{
        const commerces = JSON.parse(readFileSync('web_comercios/data/commerces.json'))
        writeFileSync("web_comercios/data/commerces.json", JSON.stringify([...commerces, data]))
    } catch(e){  
        writeFileSync("web_comercios/data/commerces.json", JSON.stringify([data]))
    }

    return NextResponse.json({message: "Commerce saved..."});
}