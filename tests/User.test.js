const User = require("../src/User");

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  });
  // test password
  test("password is correct", () => {
    expect(typeof user.password).toBe("string");
  });

  // test age
  test("Age property tests", () => {
    expect(typeof user.age).toBe("number");
  });
});

// test login

test("Log in User", () => {
  expect(() => {
    user.login(!user.password);
  }).toThrowError("incorrect password");
});

// test logout
test("User Loggs out", () => {
  expect(user.loggedIn).toBe(false);
});
