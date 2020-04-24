import Address from "./Address";
import { type, validate } from "../helpers/InterfaceValidators";

class User {
  constructor(properties = {}) {
    this.id = validate(type("number"), parseInt(properties.id));
    this.token = validate(type("string"), properties.token);
    this.name = validate(type("string"), properties.name);
    this.email = validate(type("string"), properties.email);
    this.role = validate(type("string"), properties.role);
    this.address = validate(
      type("array", [], ["interface", Address]),
      properties.address
        ? properties.address.map(addr => new Address(addr))
        : []
    );
  }
}
export default User;
