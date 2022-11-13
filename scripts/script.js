const courseList = [
  {
    code: "1620",
    name: "Web Fundamental Technologies",
  },
  {
    code: "1100",
    name: "Organizational Behaviour",
  },
  {
    code: "1420",
    name: "Intro To Sys Admin",
  },
];

let user_input = "";
do {
  user_input = prompt("Enter 4-digit code: ");
} while (user_input.length != 4 || isNaN(Number(user_input)));

codes = [];
for (let i = 0; i <= courseList.length; i++) {
  if (courseList[i].code === user_input) {
    alert(
      `Yes, I am taking the course: ${courseList[i].code}, ${courseList[i].name} `
    );
    break;
  } else {
    codes.push(user_input);
    alert("Successfully added the course");
    break;
  }
}
