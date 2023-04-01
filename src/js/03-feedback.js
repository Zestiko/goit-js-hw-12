
import throttle from 'lodash.throttle';
import '../css/common.css'
import '../css/03-feedback.css'

const refs = {
   form: document.querySelector('.feedback-form'),
   input: document.querySelector('.feedback-form input'),
   textarea:document.querySelector('.feedback-form textarea')
}
const STORAGE_KEY='feedback-form-state'
let formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input',throttle (onInputValue,500));
refs.textarea.addEventListener('input',throttle (onInputValue,500));

function onInputValue(evt) {
  formData={...formData,
         [evt.target.name]:evt.target.value,
  }
   const dataJson=JSON.stringify(formData)
   localStorage.setItem(STORAGE_KEY,dataJson)
}
populateFormInputs()

function onFormSubmit(evt) {
   evt.preventDefault();
   console.log(formData)
   evt.currentTarget.reset();
   formData = {};
   localStorage.removeItem(STORAGE_KEY);
}

function populateFormInputs() {
   const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(savedFormData);
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }}
