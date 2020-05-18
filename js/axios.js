document
  .getElementById("todoInputForm")
  .addEventListener("submit", performPostRequest);

function performPostRequest(e) {
  var resultElement = document.getElementById("postResult");
  var emailTitle = document.getElementById("emailTitle").value;
  var passwordTitle = document.getElementById("passwordTitle").value;

  axios
    .post("http://localhost:4000/api/auth/register", {
      email: emailTitle,
      password: passwordTitle,
      completed: false,
    })
    .then(function (response) {
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
  e.preventDefault();
}

document
  .getElementById("todoLoginForm")
  .addEventListener("submit", performLoginRequest);

function performLoginRequest(e) {
  var loginElement = document.getElementById("postLogin");
  var emailTitle = document.getElementById("emailTitle").value;
  var passwordTitle = document.getElementById("passwordTitle").value;

  axios
    .post("http://localhost:4000/api/auth/login", {
      email: emailTitle,
      password: passwordTitle,
      completed: false,
    })
    .then(function (response) {
      loginElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
      loginElement.innerHTML = generateErrorHTMLOutput(error);
    });
  e.preventDefault();
}
