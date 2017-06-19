# Templates

[Aurelia Documentation](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics)

Templating is handled by the `aurelia-templating` module. Data binding is among the things the the module could do, and it does it quite well.

Aurelia templates (Views) are wrapped in the `template` tag. The example below shows a text input with the it's value bound to a property in the view model. As we are binding it `two-way`, any changes to the value from the fornt-end will propagate to the property and vice versa.

Properties in the view-model could also be bound to the view as can be seen inside the `h1`.

```html
<template>
  <h1>Hello ${name}</h1>
  <input type="text" placeholder="Name" value.two-way="name" >
</template>
```

```typescript
import { bindable } from "aurelia-framework"

export class InputCustomElement {
  @bindable name: string;
}
```
