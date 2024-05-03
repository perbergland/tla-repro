import { Meteor } from "meteor/meteor";
import { tlaValue, someFunction } from "./tla-file";

Meteor.startup(()=>{
    console.log("Starting!")
    console.dir({tlaValue, someFunction})
});