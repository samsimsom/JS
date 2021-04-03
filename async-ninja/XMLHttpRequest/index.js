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

lessonThree();
