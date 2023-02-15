let finalDistance = 0;
function convert(distance, unit) {
  if (unit === "mi") {
    finalDistance = distance * 1.60934;
    return console.log(finalDistance + " " + "Km");
  } else if (unit === "km") {
    finalDistance = distance * 0.621371;
    return console.log(finalDistance + " " + "mi");
  }
}

convert(100, "mi");
