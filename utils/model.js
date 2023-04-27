const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

function read(fileName) {
  return readFileSync(resolve(fileName + ".json"), "utf-8");
}

function write(fileName, data) {
  writeFileSync(resolve(fileName + ".json"), JSON.stringify(data, null, 2));
  return true;
}

module.exports = {
  read,
  write,
};
