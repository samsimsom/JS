console.log("--- PROMISES ---");

// promis is an object
// it can be pending
// it can be fulfilled
// it can be rejected

// then() <- fulfilled
// catch() <- rejected

const urlOne = "https://jsonplaceholder.typicode.com/posts/59";
const urlTwo = "https://jsonplaceholder.typicode.com/photos/";

function setup() {
  /*
  let promise = fetch(urlOne);
  console.log(promise);

  promise.then(gotData);
  promise.catch(gotErr);

  function gotData(data) {
    console.log(data);
  }

  function gotErr(err) {
    console.log(err);
  }
  */

  /*
  console.log(fetch(urlOne));

  fetch(urlOne)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  fetch(urlOne)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  */

  /*
  fetch(urlOne)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return fetch(urlTwo);
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
  */

  fetch(urlOne)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      return fetch(urlTwo + json.id);
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

setup();
