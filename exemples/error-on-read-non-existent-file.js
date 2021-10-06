const { resolveLeft, resolveRight } = require("../lib/either");
const fs = require("fs/promises");

const promiseResolver = (promise) =>
  promise.then(resolveRight).catch(resolveLeft)

class CustomError {
  constructor(error) {
    this.name = error.name;
    this.stack = error.stack;
    this.message = error.message;
  }
}

const readNonExistentFile = async () => {
  const either = await promiseResolver(fs.readFile("non-existent.txt"));
  if (either.isLeft()) {
    return resolveLeft(new CustomError(either.value));
  }

  return resolveRight(either.value);
};

(async () => {
  const res = await readNonExistentFile();

  console.log(res.value);
})();
