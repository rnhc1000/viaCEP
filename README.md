# viaCEP - Find your detailed address
This is an app that allows you to get a detailed address information given a valid CEP code,
(Valid only in Brazil) available at [https://notas.ferreiras.dev.br] The goal here is to learn how even a small app can take davantage of a desig pattern approach including services,
models
and controllers,
thanks to Prof Nelio Alves
and its approach on how to design
and develop software in a standardized approach.
## Table of contents
-[Overview](#overview)
-[Screenshot](#screenshot)
-[Links](#links)
-[Builtwith](#built-with)
-[WhatIlearned](#what-i-learned)
-[Continueddevelopment](#continued-development)
-[Resources](#useful-resources)
-[Author](#author)
-[Acknowledgments](#acknowledgments)
## Overview
### Screenshot
[./viaCEP.png]
* ### Links
- Live Site URL: [https://notas.ferreiras.dev.br] 
## Built with
- Semantic HTML5 markup 
- CSS custom properties 
- Flexbox 
- CSS Grid 
- Mobile 
- first workflow 
- Vanilla Javascript 
 ## What I learned
```html
<div class="form-control">
    <label for="number">Número</label>
    <input type="text" name="number" id="number" class="form-input" placeholder="Número">
    <div class="error-message" data-error="number"></div>
</div>
``` 
```css
 :root {
    --main-white: #f0f0f0;
    --main-red: #be3144;
    --main-blue: #45567d;
    --main-gray: #303841;
    --main-orange: #FF8400;
    --main-card: #3d3d3d;
    --orangered: rgb(255, 69, 0);
    --background-hr: #ebb653;
    --error-message: #faa;
}
``` 
```js
function State() {
  this.address = new Address();
  this.btnSave = null;
  this.btnClear = null;
  this.inputCep = null;
  this.inputStreet = null;
  this.inputNumber = null;
  this.inputCity = null;
  this.errorCep = null;
  this.errorNumber = null;
}
const state = new State();
``` 
## Continued development
Next step: To clone this project and use ReactJS 
### Useful resources
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects] Everything is an Object in JS.
- [https://html-css-js.com/] Mandatory pit stop at this site.
## Author
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
Prof Nelio Alves