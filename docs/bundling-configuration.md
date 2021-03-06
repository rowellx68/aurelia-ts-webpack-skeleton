# Bundling
Bundling is done via Webpack. But Webpack does more by transpiling TypeScript to JavaScript and Sass to CSS.

Majority of the setup has been done for you, however, you might need to add a few more settings.

Below is an example of how we could expose custom attributes/elements/value converters globally.

```js
// webpack.config.js
alias: {
  "attributes": path.resolve("src/attributes"),
  "components": path.resolve("src/components")
}
```

You will then need to set them up with Aurelia.

```typescript
.plugin(PLATFORM.moduleName("attributes"))
.plugin(PLATFORM.moduleName("components"))
```

There will also be times when a JavaScript library needs to be exposed globally, for this skeleton we have `bluebird` and `tippy.js`. These will be exposed  on the browser's global scope and outside of the Aurelia app context.

We do it by doing the following:
```js
// webpack.config.js
module: {
  rules: [
    { test: require.resolve("bluebird"), loader: "expose-loader?Promise" },
    { test: require.resolve("tippy.js"), loader: "expose-loader?Tippy" }
  ]
},
plugins: [
  new ProvidePlugin({
    "Promise": "bluebird",
    "Tippy": "tippy.js"
  })
]
```
 This is how you will need to expose jQuery, if needed.

 ### WARNING

 It is important not to add any Aurelia specific modules in the entry points settings. Some Aurelia modules require another module to be initialised and would cause issues if they are added on the `app` or `vendor` entrypoints. They will however be bundled into the `app` bundle as they will be imported inside the source files.

 A good example of this is `aurelia-dialog`.

 ```javascript
entry: {
  app: ["aurelia-bootstrapper"],
  vendor: ["bluebird", "tippy.js"]
}
 ```

# Configuration


# Building for Production/Development
