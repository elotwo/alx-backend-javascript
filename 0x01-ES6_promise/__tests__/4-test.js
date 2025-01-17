import signUpUser from "../4-user-promise.js";

test('should log "Got a response from the API" to the console', () => {
  console.log = jest.fn();  // Mock console.log
  return signUpUser(Promise.resolve({ firstName: 'Bob', lastName: 'Dylan' })).then(() => {
    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});
