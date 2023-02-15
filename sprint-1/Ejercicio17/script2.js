function optimalPath(path) {
  const newPath = [];

  for (const item of path) {
    const lastItemInNewPath = newPath[newPath.length - 1];
    if ((item === "NORTE" && lastItemInNewPath === "SUR") || (item === "SUR" && lastItemInNewPath === "NORTE") || (item === "ESTE" && lastItemInNewPath === "OESTE") || (item === "OESTE" && lastItemInNewPath === "ESTE")) {
      newPath.pop();
    } else newPath.push(item);
  }
  return newPath;
}

console.log(optimalPath(["NORTE", "SUR", "SUR"]));
