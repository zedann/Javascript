const printForecast = function (arr) {
  let s = '';
  for (let i = 0; i < arr.length; i++) {
    let curTemp = arr[i];
    if (typeof curTemp !== 'number') continue;
    s += `... ${curTemp}°C in ${i + 1} days `;
  }
  return s;
};
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5 ,0,4]));
