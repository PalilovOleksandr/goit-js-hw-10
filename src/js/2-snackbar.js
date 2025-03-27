import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const delay = this.elements.delay.value;
  const state = this.elements.state.value;

  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, +delay);
  });
  promis
    .then(delay => {
      iziToast.success({
        title: 'OK',
        titleColor: '#ffffff',
        titleSize: '16px',
        message: `Fulfilled promise in ${delay}ms`,
        messageColor: '#ffffff',
        messageSize: '16px',
        backgroundColor: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        titleColor: '#ffffff',
        titleSize: '16px',
        message: `Rejected promise in ${delay}ms`,
        messageColor: '#ffffff',
        messageSize: '16px',
        backgroundColor: '#ef4040',
        position: 'topRight',
      });
    });
}
