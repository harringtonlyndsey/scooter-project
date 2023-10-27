const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  test("username should be correct", () => {
    expect(user.username).toBe("Joe Bloggs");
  });
  // test password
  test("password is not public", () => {
    expect(user.password).toBe(undefined);
  });
  // test age
  test("Age property tests", () => {
    expect(typeof user.age).toBe("number");
  });
  test("Age should be correct", () => {
    expect(user.age).toBe(21);
  });
});

// test login
describe("User authentication", () => {
  test("Cannot log in with wrong password", () => {
    expect(() => {
      user.login("not password");
    }).toThrowError("incorrect password");
  });
  test("Can log in with the right password", () => {
    user.login("test123");
    expect(user.loggedIn).toBe(true);
  });
  test("User Loggs out", () => {
    user.logout();
    expect(user.loggedIn).toBe(false);
  });
});
