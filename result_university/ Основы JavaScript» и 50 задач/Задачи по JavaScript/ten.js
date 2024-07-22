// Подведение итогов. Практика

const people = [
  { id: 1, fullName: "Ivan Ivanov" },
  { id: 2, fullName: "Maria Petrova" },
  { id: 3, fullName: "Alexey Sidorov" },
  { id: 4, fullName: "Elena Kuznetsova" },
  { id: 5, fullName: "Petr Andreev" },
  { id: 6, fullName: "Anna Morozova" },
  { id: 7, fullName: "Dmitry Kovalev" },
  { id: 8, fullName: "Olga Vasilieva" },
  { id: 9, fullName: "Sergey Popov" },
  { id: 10, fullName: "Natalia Lebedeva" },
];

const filter = document.getElementById("filter");
const list = document.getElementById("list");

function getOptionLabel(ele) {
  let text = e.data ? e.data.toString().toUpperCase() : "";
  return people.hasOwnProperty(text) ? ele[text] : ele.fullName;
}

filter.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filteredUsers = people.filter((user) =>
    user.fullName.toLowerCase().includes(value)
  );
  lists(filteredUsers);
});

function lists(people) {
  list.innerHTML = "";
  people.forEach((e) => {
    list.innerHTML +=
      "<p style='margin: 0; border-bottom: #3d3b3b solid 1px; background: #fff; padding: 5px;'>" +
      e.fullName +
      "</p>";
  });
}

lists(people);
