import { Meteor } from "meteor/meteor";
import { tlaValue } from "./tla-file";

Meteor.startup(()=>{
    console.log("Starting!")
    console.log("Should show { tlaValue: 4 } and not { tlaValue: undefined }");
    if (tlaValue === undefined) {
        console.error({ tlaValue });
    }
    else {
        console.log({ tlaValue });
    }
});