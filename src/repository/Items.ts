import { IItems } from "./IItems";

class Items implements IItems {
  private _uuid: string;

  public get uuid() {
    return this._uuid;
  }

  public set uuid(value: string) {
    this._uuid = value;
  }

  private _full_name: string;

  public get full_name() {
    return this._full_name;
  }

  public set full_name(value: string) {
    this._full_name = value;
  }

  private _age: number;

  public get age() {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
  }

  constructor(_uuid: string, _full_name: string, _age: number) {
    this._uuid = _uuid;
    this._full_name = _full_name;
    this._age = _age;
  }
}

export default Items;
