import throttle from 'lodash.throttle';

const FEEDBACK_FORM = 'feedback-form-state';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onChange, 1000));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(formData);
  if (!formData.message || !formData.email) {
    alert('Fill all fields');
    return;
  }
  formData = {};
  evt.target.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function onChange(evt) {
  formData[evt.target.name] = evt.target.value;
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(FEEDBACK_FORM, formDataJson);
}

function populateTextarea() {
  formData = JSON.parse(localStorage.getItem(FEEDBACK_FORM)) || {};
  if (formData) {
    refs.input.value = formData.email || '';
    refs.textarea.value = formData.message || '';
  }
}

// const feedbackForm = document.querySelector('.feedback-form');
// const { email, message } = feedbackForm;

// feedbackForm.addEventListener('input', throttle(getInputData, 500));
// feedbackForm.addEventListener('submit', saveInputData);

// readInputData();
// let objectList = {};
// console.log(objectList);

// function getInputData(e) {
//   objectList[e.target.name] = e.target.value;

//   localStorage.setItem(
//     FEEDBACK_FORM,
//     JSON.stringify({
//       email: email.value,
//       message: message.value,
//     })
//   );
//   console.log(getInputData);
// }

// function readInputData() {
//   const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
//   try {
//     if (Object.entries(savedData).forEach()) {
//       email.value = savedData.email;
//       message.value = savedData.message;
//     }
//   } catch (error) {
//     console.log(error.email);
//     console.log(error.message);
//   }
// }
// function saveInputData(evt) {
//   evt.preventDefault();
//   console.log((objectList[evt.target.name] = evt.target.value));
//   console.log(`The data is entered into the form:
//   email  ${email.value}
//   message  ${message.value}`);
//   objectList = {};
//   console.log(objectList);
//   evt.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK_FORM);
// }
