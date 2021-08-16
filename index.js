class ChangeBodyColor {
  constructor() {
    this.refs = {
      startBtn: document.querySelector('[data-action="start"]'),
      stopBtn: document.querySelector('[data-action="stop"]'),
      body: document.querySelector('body'),
    };
    this.colors = [
      '#FFFFFF',
      '#2196F3',
      '#4CAF50',
      '#FF9800',
      '#009688',
      '#795548',
    ];

    this.refs.startBtn.addEventListener('click', this.onClickThemeChange);
    this.refs.stopBtn.addEventListener('click', this.onStopBtnClick);
  }

  randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  changeColor = () => {
    this.refs.body.style.backgroundColor =
      this.colors[this.randomIntegerFromInterval(0, this.colors.length - 1)];
    this.refs.startBtn.disabled = true;
  };

  onClickThemeChange = () => {
    this.intervalId = setInterval(this.changeColor, 1000);
  };

  onStopBtnClick = () => {
    clearInterval(this.intervalId);
    this.refs.startBtn.disabled = false;
  };
}

const bodyColor = new ChangeBodyColor();

// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

// const refs = {
//   startBtn: document.querySelector('[data-action="start"]'),
//   stopBtn: document.querySelector('[data-action="stop"]'),
//   body: document.querySelector('body'),
// };

// refs.startBtn.addEventListener('click', onClickThemeChange);
// refs.stopBtn.addEventListener('click', onStopBtnClick);

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeColor() {
//   refs.body.style.backgroundColor =
//     colors[randomIntegerFromInterval(0, colors.length - 1)];
//   refs.startBtn.disabled = true;
// }

// function onClickThemeChange() {
//   intervalId = setInterval(changeColor, 1000);
// }

// function onStopBtnClick() {
//   clearInterval(intervalId);
//   refs.startBtn.disabled = false;
// }
