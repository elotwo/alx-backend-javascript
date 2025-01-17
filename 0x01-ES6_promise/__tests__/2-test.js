import  handleResponseFromAPI from "../2-then.js";

test('should log "Got a response from the API" to the console', () => {
  console.log = jest.fn();  // Mocking console.log
  return handleResponseFromAPI(Promise.resolve()).then(() => {
    expect(console.log).toHaveBeenCalledWith('Got a response from the API');
  });
});

