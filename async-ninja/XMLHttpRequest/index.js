// JS Starting

function lessonOne() {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      console.log(request.responseText);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
}
// lessonOne();

function lessonTwo() {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request);
      console.log(request.responseText);
    } else if (request.readyState === 4) {
      console.log("Could not fetch the data!");
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  request.send();
}
// lessonTwo();

function lessonThree() {
  // Lesson Three Content
  const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        callback(undefined, request.responseText);
      } else if (request.readyState === 4) {
        callback("Could not fetch the data!", undefined);
      }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
  };

  console.log(1);
  console.log(2);

  getTodos((error, data) => {
    console.log("callback fired!");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });

  console.log(3);
  console.log(4);
}
// lessonThree();

function lessonFour() {
  // Lesson Four Content
  const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("Could not fetch the data!", undefined);
      }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
    request.send();
  };

  getTodos((error, data) => {
    console.log("callback fired!");
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  });
}
// lessonFour();

function lessonFive() {
  // Lesson Five Content
  const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        callback(undefined, data);
      } else if (request.readyState === 4) {
        callback("Could not fetch the data!", undefined);
      }
    });

    request.open("GET", resource);
    request.send();
  };

  // callback hell -------------------------------------------------------------
  getTodos("json/first.json", (error, data) => {
    error ? console.log(error) : console.log(data);
    getTodos("json/second.json", (error, data) => {
      error ? console.log(error) : console.log(data);
      getTodos("json/third.json", (error, data) => {
        error ? console.log(error) : console.log(data);
      });
    });
  });
}
// lessonFive();

/* -------------------------------------------------------------------------- */
// Promise Example
function promiseExampleOne() {
  const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject("Error getting resource");
        }
      });

      request.open("GET", resource);
      request.send();
    });
  };

  getTodos("json/first.json")
    .then((data) => {
      console.log("promise resolved:", data);
    })
    .then((err) => {
      console.log("Promise rejected:", err);
    });
}
// promiseExampleOne();

function promiseExampleTwo() {
  const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else if (request.readyState === 4) {
          reject("Error getting resource");
        }
      });

      request.open("GET", resource);
      request.send();
    });
  };

  getTodos("json/first.json")
    .then((data) => {
      console.log("promise 1 resolved:", data);
      return getTodos("json/second.json");
    })
    .then((data) => {
      console.log("promise 2 resolved:", data);
      return getTodos("json/third.json");
    })
    .then((data) => {
      console.log("promise 3 resolved:", data);
    })
    .then((err) => {
      console.log("Promise rejected:", err);
    });
}
// promiseExampleTwo();

/* -------------------------------------------------------------------------- */
// Fetch Example (Modern)
function fetchExampleOne() {
  fetch("json/first.json")
    .then((response) => {
      console.log("resolved", response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("rejected", error);
    });
}
// fetchExampleOne();

function fetchExamplesTwo() {
  const getTodos = async () => {
    const response = await fetch("json/first.json");
    if (response.status !== 200) {
      throw new Error("Cannot fetch data!");
    }
    const data = await response.json();
    return data;
  };

  getTodos()
    .then((data) => {
      console.log("resolved:", data);
    })
    .catch((err) => {
      console.log("rejected:", err.message);
    });
}
fetchExamplesTwo();
