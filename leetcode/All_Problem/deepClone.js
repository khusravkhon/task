function deepClone(object) {
  if (object == null || typeof object !== "object") {
    return object;
  }

  if (object instanceof Date) {
    return new Date(object);
  }

  //   const proto = object.getPrototypeOf(object);

  //   if (
  //     proto !== object.prototype &&
  //     proto !== Array.prototype &&
  //     proto !== null
  //   ) {
  //     return object;
  //   }

  const key = Object.keys(object);
  return key.reduce(
    (acc, key) => {
      acc[key] = deepClone(object[key]);
      return acc;
    },
    Array.isArray(object) ? [] : {},
  );
}

const itemsInCart = [
  { product: "Носки", quantity: 3 },
  { product: "Штаны", quantity: 1 },
  { product: "Кепка", quantity: 1 },
];

const copy = deepClone(itemsInCart);
copy[0].quantity = 100;
console.log(itemsInCart[0].quantity);
console.log(copy[0] === itemsInCart[0]);

const deep = structuredClone(itemsInCart);
