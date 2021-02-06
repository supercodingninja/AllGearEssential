$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("#login");
  const userInput = $("#user-input");
  const emailInput = $("#email-input");
  const passwordInput = $("#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      user: userInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.user || !userData.email || !userData.password) {
      return;
    }

    // If we have the user's name, email, and password: then we can run the loginUser function and clear the form
    loginUser(userData.user, userData.email, userData.password);
    userInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us to the the gear page
  function loginUser(email, password) {
    $.post("/api/login", {
      user: user,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/gear");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
