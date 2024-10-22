// Gotta import something to turn this file into a module. Go figure
import axios from "axios";

const asyncMethod = async ()=> {
    return 4;
}

export const tlaValue = await asyncMethod();

export const someFunction = ()=>{
    return 8;
}