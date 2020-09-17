class StringBuilder {
  constructor(value) {
    this.value = value;
  }
  get currentValue() {
    console.log(`Текущее состояние value: ${this.value}`);
  }
  append(str) {
    return (this.value = this.value + str);
  }
  prepend(str) {
    return (this.value = str + this.value);
  }
  pad(str) {
    return (this.value = str + this.value + str);
  }
}
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
builder.currentValue;
