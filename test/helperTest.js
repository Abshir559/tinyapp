const { assert } = require('chai');
const { getUserByEmail } = require('../helper');
const testUsers = {
  "userRandomID": {
    id: "userRandomID", 
    email: "user@example.com", 
    password: "purple-monkey-dinosaur"
  },
  "user2RandomID": {
    id: "user2RandomID", 
    email: "user2@example.com", 
    password: "dishwasher-funk"
  }
};
describe('getUserByEmail', function() {
  it('should return a user with valid email', function() {
    const user = getUserByEmail("user@example.com", testUsers)
    const expectedOutput =  testUsers["userRandomID"];

    assert.deepEqual(user, expectedOutput)
  });
});
describe('getUserByEmail', function() {
  it('should return undefined if user email doesnt exist', function() {
    const user = getUserByEmail("weOUT@noemail.com", testUsers);

    assert.equal(user, undefined)
  })
})