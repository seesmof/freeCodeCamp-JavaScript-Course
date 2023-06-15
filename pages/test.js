const retrieveJoke = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  return data;
};

const postJoke = async (body, title) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      body: body,
    }),
  });
  const data = await response.json();
  return data;
};

const putJoke = async (title) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });
  const data = await response.json();
  return data;
};

const main = async () => {
  const joke = await retrieveJoke();
  console.log(joke.value);

  const title = "Test";
  const body = "Test";
  const post = await postJoke(body, title);
  console.log(post);

  const newTitle = "New Test";
  const put = await putJoke(newTitle);
  console.log(put);
};

main();
