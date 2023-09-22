import Address from "../models/address.js";
//import * as requestService from "../services/request-service.js";
import * as addressService from "../services/address-service.js";
import * as listController from "./list-controller.js";

export function init() {
  state.inputCep = document.forms.newAddress.cep;
  state.inputStreet = document.forms.newAddress.street;
  state.inputNumber = document.forms.newAddress.number;
  state.inputCity = document.forms.newAddress.city;

  state.btnSave = document.forms.newAddress.btnSave;
  state.btnClear = document.forms.newAddress.btnClear;

  state.errorCep = document.querySelector('[data-error="cep"]');
  state.errorNumber = document.querySelector('[data-error="number"]');
  // setFormError("cep", "Erro no CEP!");
  // setFormError("number", "Erro no Número!")

  state.inputNumber.addEventListener("change", handleInputNumberOnChange);
  state.inputNumber.addEventListener("keyup", handleInputNumberOnKeyUp);

  state.btnClear.addEventListener("click", handleBtnClearOnClick);
  state.btnSave.addEventListener("click", handleBtnSaveOnClick);
  state.inputCep.addEventListener("change", handleInputCepOnChange);
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

console.log(state);

function setFormError(key, value) {
  const element = document.querySelector(`[data-error="${key}"]`);
  element.innerHTML = value;
}

function handleInputNumberOnChange(event) {
  if (event.target.value == "") {
    setFormError("number", "Campo requerido!");
  } else {
    setFormError("number", "");
  }
}

function handleBtnClearOnClick(event) {
  event.preventDefault();
  clearForm();
}

function clearForm() {
  state.inputCep.value = "";
  state.inputNumber.value = "";
  state.inputStreet.value = "";
  state.inputCity.value = "";
  setFormError("cep", "");
  setFormError("number", "");
  state.address = new Address();
  state.inputCep.focus();
}

async function handleBtnSaveOnClick(event) {
  event.preventDefault();
  const errors = addressService.getErrors(state.address);
  //console.log(errors);
  const keys = Object.keys(errors);
  if (keys.length > 0) {

    keys.forEach(key => {
      setFormError(key, errors[key]);
    })
    // for (let i in keys) {
    // setFormError(keys[i], errors[keys[i]]);
    // }
  } else {
    // const result = requestService.getJson("https://viacep.com.br/ws/65911652/json/");
    // console.log(result);
    //console.log(state.address);
    listController.addCard(state.address);
    clearForm();
  }
}

async function handleInputCepOnChange(event) {
  const cep = event.target.value;
  try {
    const address = await addressService.findByCep(cep);
    state.inputCity.value = address.city;
    state.inputStreet.value = address.street;
    state.address = address;
    setFormError("cep", "");
    state.inputNumber.focus();
    //console.log(address);
  } catch (e) {
    state.inputCity.value = "";
    state.inputStreet.value = "";
    setFormError("cep", "Informe um CEP válido!");
  }
}

function handleInputNumberOnKeyUp(event) {
  state.address.number = event.target.value;
}
