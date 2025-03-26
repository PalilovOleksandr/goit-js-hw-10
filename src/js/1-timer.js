import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input#datetime-picker');
const btn = document.querySelector('button[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
btn.addEventListener('click', timerHandler);
let userSelectedDate;
let intervalId;
btn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    if (userSelectedDate <= new Date()) {
      btn.disabled = true;
      iziToast.error({
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
        position: 'topRight',
        messageColor: '#ffffff',
      });
      return;
    } else {
      btn.disabled = false;
    }
  },
};

function timerHandler() {
  btn.disabled = true;
  input.disabled = true;
  intervalId = setInterval(() => {
    const timeData = userSelectedDate - new Date();
    if (timeData <= 0) {
      clearInterval(intervalId);
      input.disabled = false;
      return;
    }
    const { days, hours, minutes, seconds } = convertMs(timeData);

    daysValue.textContent = days;
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
  }, 1000);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(input, options);
