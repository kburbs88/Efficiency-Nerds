const renderProfile = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    return;
  }

  const usernameElement = document.getElementById("username");
  const pronounsElement = document.getElementById("pronouns");
  const ageRangeElement = document.getElementById("age-range");
  const sunSignElement = document.getElementById("sun-sign");
  const aboutMeElement = document.getElementById("about-me");
  const nerdyFactElement = document.getElementById("nerdy-fact");

  usernameElement.textContent = currentUser.username;
  pronounsElement.textContent = currentUser.pronouns;
  ageRangeElement.textContent = currentUser.ageRange;
  sunSignElement.textContent = currentUser.sunSign;
  aboutMeElement.textContent = currentUser.aboutMe;
  nerdyFactElement.textContent = currentUser.nerdyFact;
};

renderProfile();
