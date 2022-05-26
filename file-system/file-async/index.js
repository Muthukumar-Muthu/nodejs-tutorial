const { readFile, writeFile } = require("fs");

//read file
console.log("starting the process");

readFile(
  "./readfile.txt",
  {
    encoding: "utf-8",
  },
  (err, data) => {
    console.log("read the file");

    if (err) console.error(err);
    else {
      writeFile("./writfile.txt", data, { flag: "a" }, (err) => {
        console.log("writing the file");

        console.log(err);
      });
    }
  }
);

console.log("ending the process");
