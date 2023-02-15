let route = ["NORTE", "SUR", "SUR"];
function optimalPath(array) {
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "NORTE": {
        if (array[i + 1] !== "SUR") {
          if (finalArray[finalArray.length - 1] === "SUR") {
            finalArray.splice(finalArray.length - 1, 1);
          } else finalArray.push("NORTE");
          break;
        } else if (array[i + 1] === "SUR") {
          i++;
          break;
        }
      }
      case "SUR": {
        if (array[i + 1] !== "NORTE") {
          if (finalArray[finalArray.length - 1] === "NORTE") {
            finalArray.splice(finalArray.length - 1, 1);
          } else finalArray.push("SUR");
          break;
        } else if (array[i + 1] === "NORTE") {
          i++;
          break;
        }
      }
      case "OESTE": {
        if (array[i + 1] !== "ESTE") {
          if (finalArray[finalArray.length - 1] === "ESTE") {
            finalArray.splice(finalArray.length - 1, 1);
          } else finalArray.push("OESTE");
          break;
        } else if (array[i + 1] === "ESTE") {
          i++;
          break;
        }
      }
      case "ESTE": {
        if (array[i + 1] !== "OESTE") {
          if (finalArray[finalArray.length - 1] === "OESTE") {
            finalArray.splice(finalArray.length - 1, 1);
          } else finalArray.push("ESTE");
          break;
        } else if (array[i + 1] === "OESTE") {
          i++;
          break;
        }
      }
      default:
        console.log("Ninguno de los dos");
    }
  }

  return finalArray;
}

console.log(optimalPath(["NORTE", "SUR", "SUR", "SUR"]));
