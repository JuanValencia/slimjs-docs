# Introduction
Slim.js is a lightweight web component library that provides extended capabilities for components (such as data binding) using es6 native class inheritance. This library is focused on providing the developer with the ability to write robust web components without the hassle of unnecessary dependencies and the overhead of a framework.

# Getting started
```
npm install slim-js
yarn add slim-js
bower install slimjs
```

## Polyfills
Slim.js is based on the browser's native DOM API's web-components spec.
For browsers that do not support this natively, a polyfill is required.

You can insert your polyfill loader into the html file
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.17/webcomponents-hi-ce.js"></script>
``` 
or use Slim.polyfill internal method to determine whether the polyfill is required and load if so.
```html
<script src="/path/to/slim.js/Slim.js"></script>
<script type="text/javascript">
    Slim.polyfill('https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.17/webcomponents-hi-ce.js');
</script>
```
