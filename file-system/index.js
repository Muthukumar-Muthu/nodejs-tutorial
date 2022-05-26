console.log("starting the process");
const { readFileSync, writeFileSync } = require("fs");
const text = readFileSync("./readfile.txt", { encoding: "utf-8" });
console.log("Read file -", text);
const result = writeFileSync("./writefile.txt", text, {
  flag: "a",
});
console.log("Finished writing file", result);
