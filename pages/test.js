try {
  let result = 1 / 0;
  console.log(result);
} catch (e) {
  console.log("ERROR OCCURED");
  console.log(e.message);
}
