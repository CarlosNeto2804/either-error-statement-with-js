class Monad {
  pure() {
    throw "pure method needs to be implemented";
  }

  flatMap(x) {
    throw "flatMap method needs to be implemented";
  }

  map(f) {
    return this.flatMap((x) => new this.pure(f(x)));
  }
}

module.exports = { Monad };
