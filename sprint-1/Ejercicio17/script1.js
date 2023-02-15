function optimalPath(path) {
  const newPath = [];

  const opposites = {
    SUR: "NORTE",
    NORTE: "SUR",
    ESTE: "OESTE",
    OESTE: "ESTE",
  };

  for (const item of path) {
    const lastItemInNewPath = newPath[newPath.length - 1];
    console.log(lastItemInNewPath);
    if (lastItemInNewPath === opposites[item]) newPath.pop();
    else newPath.push(item);
  }
  return newPath;
}

console.log(optimalPath(["NORTE", "OESTE", "SUR", "ESTE"]));
