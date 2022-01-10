import UserProps from "./types/UserProps";

class User {
  constructor() {
    this.initialize();
  }

  initialize(): void {}

  storeLocal(user: UserProps): void {}

  fetchLocal(): void {}
}

export default User;
