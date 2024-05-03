const asyncMethod = async ()=> {
    return 4;
}

console.log("before tla init");

export const tlaValue = await asyncMethod();

console.log("after tla init");
