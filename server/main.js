import { Meteor } from "meteor/meteor";
import { tlaValue } from "./tla-file";

Meteor.startup(()=>{
    console.log("Starting!")
    console.dir({tlaValue})
});