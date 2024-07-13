const userString = localStorage.getItem("users");
const users = JSON.parse(userString);

// const sortedUsers = users.sort((a, b) => {
//   if (a.aboutMe < b.aboutMe) return -1;
//   if (a.aboutMe > b.name) return 1;
//   return 0;
// });

// const sortedUsersString = JSON.stringify(sortedUsers);

// localStorage.setItem("users", sortedUsersString);

// const userString = localStorage.getItem("users");
// const users = JSON.parse(userString);
// // console.log(users.pronouns);

// const userData = JSON.parse(localStorage.getItem("userData"));

// Check if the index exists in the userData object
// const userData = {
//   firstName: "firstName",
//   lastName: "lastName",
//   username: "username",
//   email: "email",
//   aboutMe: "aboutMe",
//   ageRange: "ageRange",
//   nerdyFact: "nerdyFact",
//   pronouns: "pronouns",
//   sunSign: "sunSign",
// };

// function getLocalStorageDataAtIndex(index) {
//   const userData = JSON.parse(localStorage.getItem("users"));
//   console.log(userData);
//   if (userData && userData[index]) {
//     return userData[index];
//   } else {
//     return "Index not found in local storage data";
//   }
// }
// const nerdyFactValue = getLocalStorageDataAtIndex("name");
// console.log(nerdyFactValue);

// console.log(userData.nerdyFact);

// if (users !== null) {
// let aboutMe = users[3];
// console.log(aboutMe);
// // }

// aboutMe
// :
// "I am a dog\n"
// ageRange
// :
// "Gen Z"
// email
// :
// "molly@hotmail.com"
// firstName
// :
// "Molly"
// lastName
// :
// "Luna"
// nerdyFact
// :
// "I love dogs"
// pronouns
// :
// "He/him/his"
// sunSign
// :
// "Aquarius"
// username

// const usernameDisplay = users.email;
// console.log(usernameDisplay);

const userData = JSON.parse(localStorage.getItem("users")) || [i];
console.log(userData);
console.log(userData.length);
console.log(Object.keys(userData));

// // function renderprofile() {
const storedUsers = JSON.parse(localStorage.getItem("users")) || [i];
console.log(storedUsers.lenght);

// if (storedUsers === null) {
//   return;
// }
for (let i = 0; i < storedUsers.length; i++) {
  const profileInfo = storedUsers[i];
  console.log(profileInfo[3]);
}
// // }

// function storedUsers() {
//   localStorage.setItem("users", JSON.stringify(userdata));
// }

// renderprofile();

// const molly = userData.find((user) => user.first === "Molly");

// if (molly) {
//   console.log("Molly's age range:", molly.ageRange);
// } else {
//   console.log("Molly not found");
// }
