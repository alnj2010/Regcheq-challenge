export class User {
  readonly id: Number | null = null;
  readonly name: String = '';
  readonly lastname: String = '';

  constructor(id: Number, name: String, lastname: String) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
  }
}
