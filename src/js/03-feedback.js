import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FEEDBACK_FORM = 'feedback-form-state';
const { email, message } = feedbackForm;

feedbackForm.addEventListener('input', throttle(getInputData, 500));
feedbackForm.addEventListener('submit', saveInputData);

readInputData();

function getInputData(e) {
  localStorage.setItem(
    FEEDBACK_FORM,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}

function readInputData() {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
  console.log(savedData);
  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }
  //   console.log('email', email.value);
  //   console.log('message', message.value);
}

function saveInputData(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}
