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
  console.log(getInputData);
}
try {
  function readInputData() {
    const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM));
    console.log(savedData);

    if (Object.entries(savedData)) {
      // .forEach(function (email, message))
      email.value = savedData.email;
      message.value = savedData.message;
    }
  }
} catch (error) {
  console.log(error.email);
  console.log(error.message);
}
function saveInputData(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}
