const groupBy = (arrey, keyFn) => {
  return arrey.reduce((acc, item) => {
    const key = typeof keyFn === "function" ? keyFn(item) : item[keyFn];
    acc[key] ??= [];
    acc[key].push(item);
    return acc;
  }, {});
};

const users = [
  { name: "Аня", role: "admin" },
  { name: "Иван", role: "user" },
  { name: "Олег", role: "admin" },
];

const grouped = groupBy(users, "role");
console.log(grouped);
