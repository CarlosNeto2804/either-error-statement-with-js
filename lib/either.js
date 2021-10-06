const { Monad } = require("./monad");

class Either extends Monad {
  pure(value) {
    return new Right(value);
  }

  flatMap(f) {
    return this.isLeft() ? this : f(this.value);
  }

  isLeft() {
    return this.constructor.name === "Left";
  }

  isRight() {
    return this.constructor.name === "Right";
  }
}

class Right extends Either {
  constructor(value) {
    super();
    this.value = value;
  }
}

class Left extends Either {
  constructor(value) {
    super();
    this.value = value;
  }
}

const resolveRight = (value) => new Right(value)
const resolveLeft = (value) => new Left(value)


module.exports = { resolveLeft, resolveRight };
