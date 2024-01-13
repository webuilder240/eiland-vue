# Vue Eiland WebComponents
VueEiland is a WebComponents-based custom element library for generating Vue.js entry points. 
This library allows you to easily incorporate Vue.js components as custom elements. 
Designed based on the Island architecture, it facilitates coexistence with multiple frameworks.

## Features
- Generating Vue.js Entry Points: Easily incorporate Vue.js components as WebComponents custom elements.
- Asynchronous Component Loading: Components can be loaded asynchronously from the environment variable EILAND_PATH.
- Passing Props: Use the data-init-props attribute to pass props in JSON format.
- Island Architecture: Aimed at coexisting with multiple frameworks.

## Usage
1. Configure Component: Specify the component name using the name attribute in the vue-eiland custom element.
2. Load Component: Set process.env.EILAND_PATH to asynchronously load the component.
3. Passing Props: Use the data-init-props attribute to pass props to the component in JSON format.

## Installation
Here is how to install the VueEiland library.

``` bash
npm install vue-eiland
# or
yarn add vue-eiland
```

## Example
Here is a simple example of using VueEiland.

``` html
<vue-eiland name="your-component-name" data-init-props='{"propName": "propValue"}'></vue-eiland>
```
