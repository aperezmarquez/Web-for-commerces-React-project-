import { NextResponse } from "next/server";
import { readFileSync, writeFileSync } from 'fs';

export async function GET(){
    try {
        const commerces = JSON.parse(readFileSync('data/commerces.json', "utf-8"));

        return NextResponse.json(commerces);
    } catch (e) {
        return NextResponse.json({ message : "ERROR: No se pudieron encontrar los comercios", status : 404 });
    }
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

    if (data.commerceChange == undefined) {
        try{
            const commerces = JSON.parse(readFileSync('data/commerces.json', "utf-8"));
            writeFileSync('data/commerces.json', JSON.stringify([...commerces, newCommerce]));
            
        } catch(e){  
            writeFileSync('data/commerces.json', JSON.stringify([newCommerce]));
        }
    } else {
        const commerces = JSON.parse(readFileSync('data/commerces.json', "utf-8"));
        const commercesChange = commerces.filter((commerce) => commerce.title != data.commerceChange)

        try {
            writeFileSync('data/commerces.json', JSON.stringify([commercesChange, newCommerce]));
        } catch (e) {
            return NextResponse.json({ message : "No se encontro el json de comercios", status : 404 })
        }
    }

    return NextResponse.json({message: "Commerce saved..."});
}