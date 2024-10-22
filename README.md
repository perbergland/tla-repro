# reproduction repo for TLA problems in Meteor


run like this:

meteor npm i
meteor run

If TLA is working, the server console will tell you.

## Current state (Meteor 3.0.4)

TLA detection is broken: 
https://github.com/meteor/meteor/issues/13424

A fix for the above issue is to compile ecmascript from local sources.
You can do that by compiling ecmascript from source.
Adapt the symlink path below to your local meteor source code checkout.

```
mkdir packages
ln -s ../../meteor/packages/ecmascript ecmascript
rm -rf .meteor/local/plugin-cache && meteor run
```

With meteor 3.0.4 you will still get an error because of https://github.com/meteor/reify/issues/11

You can patch reify locally:

```
ode .meteor/local/isopacks/ecmascript/plugin.compile-ecmascript.os/npm/node_modules/meteor/babel-compiler/node_modules/@meteorjs/reify/lib/import-export-visitor.js
```

Replace visitAwaitExpression with the version in [this PR](https://github.com/meteor/reify/issues/12).
Now you should get "No errors detected" when running

```
rm -rf .meteor/local/plugin-cache && meteor run
```
