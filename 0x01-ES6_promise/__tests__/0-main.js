import getResponseFromAPI from "../0-promise.js";

test("getResponseFromAPI should return a Promise that resolves to true", async () => {
	  const response = await getResponseFromAPI();
	  expect(response).toBe(true);
});

