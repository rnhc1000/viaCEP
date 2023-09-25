# viaCEP - Find your detailed address
This is an app that allows you to get a detailed address information given a valid CEP code,
(Valid only in Brazil), available at [https://notas.ferreiras.dev.br]. The goal here is to dive into  software engineering best practices, even in a small project as a single page app, where you can take advantage of a design pattern that includes services, models and controllers with a close eye to SOLID principles, specially the SRP, heavily influenced by @devsuperior, to fetch data from an API [https://viacep.com.br] and start dealing with states, objects, asynchronous events, catching exceptions, exploring the css and html intricacies and prepare the app for JavaScript orchestrate the UI/UX without the usage of any framework.
## _Table of contents_
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I practiced](#what-i-practiced)
- [Continued development](#continued-development)
- [Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## _Overview_
The design is structured as shown:
- app|
    - css|
        - button.css
        - modal.css
        - stye.css
    - js|
        - controllers|
            - form-controller.js
            - list-controller.js
            - modal-controller.js
            - page-controller.js
        - models|
            - address.js
        - services|
            - exceptions|
                - request-exceptions
            - address-service.js
            - request-service.js
- index.html

## _Screenshot_
[![](./viaCEP.png)](https://notas.ferreiras.dev.br)
## _Links_
- Live Site URL: [https://notas.ferreiras.dev.br] 
## _Built with_
| VS Code | Git | CSS3 | HTML5 | CentOS | JavaScript |
|----------|----------|----------|----------|----------|----------|
![](https://ferreiras.dev.br/assets/images/icons/icons8-visual-studio-code.svg)  | ![](https://ferreiras.dev.br/assets/images/icons/git-scm-icon.svg) | ![](https://ferreiras.dev.br/assets/images/icons/css3-original-wordmark.svg) | ![](https://ferreiras.dev.br/assets/images/icons/html5-original-wordmark.svg) | ![](https://ferreiras.dev.br/assets/images/icons/linux-original.svg) | ![](https://ferreiras.dev.br/assets/images/icons/icons8-javascript.svg) |

 ## _What I practiced_
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
export default function Address (cep, street, number, city) {
        this.cep = cep;
        this.street = street;
        this.number = number;
        this.city = city;
}

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
## _Continued development_
- Next step: To clone this project and use ReactJS 
### _Useful resources_
- [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects] Everything is an Object in JS.
- [https://html-css-js.com/] Mandatory pit stop at this site.
## _Author_
- Website - [https://ferreiras.dev.br] 
## Acknowledgments
- @devsuperior