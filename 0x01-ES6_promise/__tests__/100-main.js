import asyncUploadUser from "../100-await";

test("asyncUploadUser returns correct structure", async () => {
	  const result = await asyncUploadUser();
	  expect(result).toHaveProperty("photo");
	  expect(result).toHaveProperty("user");
});
