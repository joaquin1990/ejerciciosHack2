//Years => 31536000
//Days => 86400
//Hours => 3600
//Minutes => 60

// VARIABLES:

// TIME TO ALL TIME MEASURES:
function processingData(time) {
  const arrayValues = [];
  let years;
  let days;
  let hours;
  let minutes;
  let seconds;
  let initialArray = [];
  // YEARS
  years = Math.trunc(time / 31536000);
  years > 1 ? (years = `${years} years`) : (years = `${years} year`);
  rest = time % 31536000;
  // DAYS
  days = Math.trunc(rest / 86400);
  days > 1 ? (days = `${days} days`) : (days = `${days} day`);
  rest = rest % 86400;
  // HOURS
  hours = Math.trunc(rest / 3600);
  hours > 1 ? (hours = `${hours} hours`) : (hours = `${hours} hour`);
  rest = rest % 3600;
  // MINUTES
  minutes = Math.trunc(rest / 60);
  minutes > 1 ? (minutes = `${minutes} minutes`) : (minutes = `${minutes} minute`);
  rest = rest % 60;
  // SECONDS
  seconds = rest;
  seconds > 1 ? (seconds = `${seconds} seconds`) : (seconds = `${seconds} second`);
  // ADD INFORMATION TO INITIALARRAY
  initialArray.push(years, days, hours, minutes, seconds);
  for (timeMeasures of initialArray) {
    if (timeMeasures[0] !== "0") arrayValues.push(timeMeasures);
  }
  return arrayValues;
}

function durationForHumans(time) {
  if (time === 0) return "Now!!";
  const arrayValues = processingData(time);
  let finalString = "";
  for (let i = 0; i < arrayValues.length; i++) {
    if (arrayValues.length === 1) return (finalString = arrayValues[0]);
    if (i < arrayValues.length - 1 && i !== 0) finalString = finalString + ", ";
    if (i === arrayValues.length - 1) finalString = finalString + " and ";

    finalString += arrayValues[i];
  }
  return finalString;
}

console.log(durationForHumans(360));
