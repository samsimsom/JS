console.log("--- ASYNC / AWAIT ---");

async function getUrl(id) {
  let response1 = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  if (!response1.ok) throw Error("Response1 is not OK!");
  let json1 = await response1.json();

  let response2 = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  if (!response2.ok) throw Error("Response2 is not OK!");
  let json2 = await response2.json();

  return { json1, json2 };
}

let promises = [];
for (let i = 1; i < 10; i++) {
  promises.push(getUrl(i));
}

Promise.all(promises)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// getUrl(42)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
