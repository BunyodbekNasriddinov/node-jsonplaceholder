const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

function read(fileName) {
  return readFileSync(resolve("database", fileName + ".json"), "utf-8");
}

function write(fileName, data) {
  writeFileSync(
    resolve("database", fileName + ".json"),
    JSON.stringify(data, null, 2)
  );
  return true;
}

function queryFilter(key, value, data) {
  return filtered = data.filter((item) => item[key] == value);
}

module.exports = {
  read,
  write,
  queryFilter,
};
