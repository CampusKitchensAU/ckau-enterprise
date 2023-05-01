//create an array of objects containing an id which is incremented by 1, a label which is the time in xx:xx am/pm format, and a value which is a number representing the time in minutes past midnight. Only do 5 minute intervals from 7am to 10pm
// export const fiveMinuteIntervals = Array.from(Array(288).keys()).map((i) => {
//     const minutes = i * 5;
//     const hours = Math.floor(minutes / 60);
//     const ampm = hours >= 12 ? "pm" : "am";
//     let time = `${hours % 12}:${minutes % 60 < 10 ? "0" : ""}${
//       minutes % 60
//     } ${ampm}`;
//     //if hours is 0, change it to 12
//     if (hours === 0) {
//       time = `12:${minutes % 60 < 10 ? "0" : ""}${minutes % 60} ${ampm}`;
//     }
//     if (hours === 12) {
//       time = `12:${minutes % 60 < 10 ? "0" : ""}${minutes % 60} ${ampm}`;
//     }

//     return { id: i + 1, label: time, value: minutes };
//   });

export const fiveMinuteIntervals = Array.from(Array(181).keys()).map((i) => {
  const minutes = (i + 84) * 5; // shift by 7 hours (84 * 5 = 420)
  const hours = Math.floor(minutes / 60);
  const ampm = hours >= 12 && hours <= 22 ? "pm" : "am"; // only show am/pm for times between 7am and 10pm
  let time = `${hours % 12}:${minutes % 60 < 10 ? "0" : ""}${
    minutes % 60
  } ${ampm}`;
  //if hours is 0, change it to 12
  if (hours === 0) {
    time = `12:${minutes % 60 < 10 ? "0" : ""}${minutes % 60} ${ampm}`;
  }
  if (hours === 12) {
    time = `12:${minutes % 60 < 10 ? "0" : ""}${minutes % 60} ${ampm}`;
  }

  return { id: i + 1, label: time, value: minutes };
});
