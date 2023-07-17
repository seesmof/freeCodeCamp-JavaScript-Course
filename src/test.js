const makeServerRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 5000);
});
