import getFullResponseFromAPI from "../1-promise.js";

test("getFullResponseFromAPI resolves on success", () => {
	  return expect(getFullResponseFromAPI(true)).resolves.toEqual({
		      status: 200,
		      body: 'Success',
		    });
});

test("getFullResponseFromAPI rejects on failure", () => {
	  return expect(getFullResponseFromAPI(false)).rejects.toThrow(
		      'The fake API is not working currently'
		    );
});

