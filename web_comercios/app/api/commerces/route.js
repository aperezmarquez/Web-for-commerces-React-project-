import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from 'fs';

export async function GET(){
    const commerces = JSON.parse(readFileSync('data/commerces.json', "utf-8"));

    return NextResponse.json({ data : commerces }, { status : 200 });
}

export async function POST(request) {
    const data = await request.json();

    const newCommerce = {
        title: data.title,
        smDesc: data.smDesc,
        desc: data.desc,
        url: data.url
    };

    console.log(newCommerce);

    try{
        const commerces = JSON.parse(readFileSync('data/commerces.json', "utf-8"));
        writeFileSync('data/commerces.json', JSON.stringify([...commerces, newCommerce]));
    } catch(e){  
        writeFileSync('data/commerces.json', JSON.stringify([newCommerce]));
    }

    return NextResponse.json({message: "Commerce saved..."});
}