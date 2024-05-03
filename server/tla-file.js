// Gotta import something to turn this file into a module. Go figure
import axios from "axios";

const asyncMethod = async ()=> {
    return 4;
}

console.log("before tla init");

export const tlaValue = await asyncMethod();

console.log("after tla init");
