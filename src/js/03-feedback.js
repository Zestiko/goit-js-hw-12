
import throttle from 'lodash.throttle';
import '../css/common.css'
import '../css/03-feedback.css'

const form = document.querySelector('.feedback-form');
const textInput=document.querySelector('.feedback-form textarea')
console.log(form);

form.addEventListener('submit', onFormSubmit);

textInput.addEventListener('input', throttle(onTextareaInput, 500));

form.addEventListener('input', throttle(onFormInput, 500))

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormInput(evt) {
   formData[evt.target.name] = evt.target.value;
   console.log(formData);
    const dataJson=JSON.stringify(formData)
   localStorage.setItem(STORAGE_KEY,dataJson)
}

populateTextInput();

function onFormSubmit(evt) {
   evt.preventDefault();
   evt.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
   const message = evt.target.value;
   localStorage.setItem(STORAGE_KEY, message);
   
}

function populateTextInput() {
   const savedMessage = localStorage.getItem(STORAGE_KEY)
   if (savedMessage) {
      textInput.value = savedMessage;
     
   }
}