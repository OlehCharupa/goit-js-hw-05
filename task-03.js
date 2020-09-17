class Storage {
  constructor([...items]) {
    this.items = items;
  }
  getItems = function () {
    return this.items;
  };
  addItem = function (newElem) {
    this.items.push(newElem);
  };
  removeItem = function (value) {
    for (let el of this.items) {
      if (el === value) {
        return this.items.splice(el === value, 1);
      }
    }
  };
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
