// init github
const github = new Github();
// init UI
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");
const searchForm = document.getElementById("search-form");

// seach input event listener
searchForm.addEventListener("submit", (e) => {
  // prevent default
  e.preventDefault();

  // get input text
  const userText = searchUser.value;

  if (userText) {
    // make http call
    github.getUser(userText)
      .then((data) => {
        if (data.profile.message === "Not Found") {
          // show alert
          ui.showAlert("User not found", "danger");

        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);

        }
      });
  } else {
    // clear profile

  }
});
