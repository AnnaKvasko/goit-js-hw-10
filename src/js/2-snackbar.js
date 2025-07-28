import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const feedbackForm = document.querySelector(".feedback-form");


if (feedbackForm) {
  feedbackForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = feedbackForm.elements.email.value.trim();
    const message = feedbackForm.elements.message.value.trim();

   
    if (!email || !message) {
      iziToast.error({
        title: 'Помилка',
        message: 'Fill please all fields',
      });
      return;
    }

    iziToast.success({
      title: 'OK',
      message: 'Form submitted successfully!',
    });

    feedbackForm.reset();
  });
}

const promiseForm = document.querySelector(".form");


if (promiseForm) {
  promiseForm.addEventListener("submit", e => {
    e.preventDefault();

    const delay = Number(promiseForm.elements.delay.value);
    const state = promiseForm.elements.state.value;

    createPromise(delay, state)
      .then(ms => {
        iziToast.success({
          title: '✅ Success',
          message: `Fulfilled promise in ${ms}ms`,
        });
      })
      .catch(ms => {
        iziToast.error({
          title: '❌ Failure',
          message: `Rejected promise in ${ms}ms`,
        });
      });

    promiseForm.reset();
  });
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}