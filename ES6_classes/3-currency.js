/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(codeValue) {
    this._code = codeValue;
  }

  set name(nameValue) {
    this._name = nameValue;
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code})`);
  }
}
