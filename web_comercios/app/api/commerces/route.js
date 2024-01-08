// Hacer POST y GETS del commerce user aqui

import { NextResponse } from "next/server";
import { promises as fs } from 'fs';

export async function POST(request) {
    const title = await request.body.title;
    const smDesc = await request.body.smDesc;
    const desc = await request.body.desc;
    const url = await request.body.url;

    const newCommerce = {
        title: title,
        smDesc: smDesc,
        desc: desc,
        url: url
    }

    const file = await fs.readFile(process.cwd() + "/data/commerces.json", "utf-8")

    try{
        const commerces = JSON.parse(fs.readFileSync('/data/commerces.json'))
        fs.writeFileSync("/data/commerces.json", JSON.stringify([...commerces, newCommerce]))
    } catch(e){  
        fs.writeFileSync("/data/commerces.json", JSON.stringify([newCommerce]))
    }

    return NextResponse.json({message: "Commerce saved..."});
}