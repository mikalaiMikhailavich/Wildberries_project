function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const discount = randomIntFromInterval(1, 10);
const discount2 = randomIntFromInterval(1, 10);

export { discount, discount2 };
