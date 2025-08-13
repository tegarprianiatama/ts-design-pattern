import { IItems } from "./IItems";

// The previous implementation stored the real data in private fields
// prefixed with underscores and exposed them through getters/setters.
// While this satisfied the interface at compile time, the properties were
// not enumerable and when an instance was logged or serialised it produced
// objects with the private field names (e.g. `_uuid`) instead of the
// expected `uuid`, `full_name` and `age` keys.

class Items implements IItems {
  constructor(
    public uuid: string,
    public full_name: string,
    public age: number
  ) {}
}

export default Items;
