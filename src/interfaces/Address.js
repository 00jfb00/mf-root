import { type, validate } from "../helpers/InterfaceValidators";

class Address {
  constructor(properties = {}) {
    this.name = validate(type("string"), properties.street);
    this.number = validate(type("string"), properties.number);
    this.district = validate(type("string"), properties.district);
    this.city = validate(type("string"), properties.city);
    this.state = validate(type("string"), properties.state);
    this.country = validate(type("string"), properties.country);
    this.code = validate(type("string"), properties.code);
  }
}
export default Address;
