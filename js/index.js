// your code here
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.commit.author.name +
        '</strong> - ' +
        commit.author.login + ' - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}

function displayBranches() {

}

function displayRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name + " - " +
        r.owner.login +        
        ' - <a href="#" data-user="' +
        r.owner.login +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById('username').value;
  console.log(user);
  req.addEventListener('load', displayRepositories);
  req.open('GET', "https://api.github.com/users/" + user + "/repos");
  req.send();
}

function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  let user = document.getElementById('username').value;
  req.addEventListener('load', displayCommits);
  req.open('GET', "https://api.github.com/repos/" + user + "/" + name + "/commits");
  req.send();
}

function getBranches() {

}
