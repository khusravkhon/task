class EventEmitter {
  keys = new Map();
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.keys.has(eventName)) {
      this.keys.set(eventName, []);
    }

    this.keys.get(eventName).push(callback);

    return {
      unsubscribe: () => {
        const arr = this.keys.get(eventName);
        const idx = arr.indexOf(callback);
        if (idx !== -1) arr.splice(idx, 1);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.keys.has(eventName)) return [];
    return this.keys.get(eventName).map((cd) => cd(...args));
  }
}

// const emitter = new EventEmitter();

// // Subscribe to the onClick event with onClickCallback
// function onClickCallback() {
//   return 99;
// }
// const sub = emitter.subscribe("onClick", onClickCallback);

// console.log(emitter.emit("onClick")); // [99]
// console.log(sub.unsubscribe()); // undefined
// console.log(emitter.emit("onClick")); // []

// const emitter = new EventEmitter();
// console.log(
//   emitter.subscribe("firstEvent", function cb1(...args) {
//     return args.join(",");
//   })
// );

// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// console.log(emitter.emit("firstEvent", [3, 4, 6])); // ["3,4,6"]

// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
// console.log(emitter.emit("firstEvent", [1, 2, 3])); // ["1,2,3"]
// console.log(sub.unsubscribe()); // undefined
// console.log(emitter.emit("firstEvent", [4, 5, 6])); // [], there are no subscriptions

const emitter = new EventEmitter();
emitter.emit("firstEvent"); // [], ни один обратный вызов еще не подписан
emitter.subscribe("firstEvent", function cb1() {
  return 5;
});
emitter.subscribe("firstEvent", function cb2() {
  return 6;
});
emitter.emit("firstEvent"); // [5, 6], возвращает выходные данные cb1 и cb2

// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
// const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
// sub1.unsubscribe(); // undefined
// console.log(emitter.emit("firstEvent", [5]));
// // [7]
