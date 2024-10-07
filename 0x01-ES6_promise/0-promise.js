export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve("API Response is successfull");
    }
    else {
      reject("API Response Failled");
    }
  });
}
