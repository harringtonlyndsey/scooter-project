class User {
  constructor(username, password, age) {
    this.username = username;
    this.password = password;
    this.age = age;
  }
  login(password) {}
  logout() {}
}

module.exports = User;
