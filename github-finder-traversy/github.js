class Github {
  constructor() {
    this.client_id = "456bfabf6ccbbeb771c8";
    this.client_scret = "3e46833aef0ffba65fbc41d4b9f8fac6703fe5fd";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    let url_user = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_scret=${this.client_scret}`;
    let url_repo = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_scret=${this.client_scret}`;

    const profileResponce = await fetch(url_user);
    const repoResponce = await fetch(url_repo);

    const profile = await profileResponce.json();
    const repos = await repoResponce.json();

    return {
      profile,
      repos,
    };
  }
}
