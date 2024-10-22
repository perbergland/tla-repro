import { Meteor } from "meteor/meteor";

Meteor.startup(()=>{
    console.log("Starting!")
    
    const tlaRequire = require("./tla-file");
    const noTlaRequire = require("./no-tla-file");

    const errors = []
    if (!("then" in tlaRequire)) {
        errors.push("tla-file isn’t marked as an async module")
    }
    if ("then" in noTlaRequire) {
        errors.push("no-tla-file is marked as an async module")
    }
    if (errors.length > 0) {
        console.error("Errors:", errors.join("\n"))
    }
    else {
        console.info("No errors detected")
    }
});