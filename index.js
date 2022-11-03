// Code your solution here
drivers = ["seda", "aykut", "seda"];
function findMatching(name) {
  return name === "seda";
}
const filtered = drivers.filter(findMatching);
//console.log(filtered);

// findMatching(drivers)[(1, 2, 3, 4, 5)].filter(function (num) {
//   return num > 3;
// });

function fuzzyMatch(name) {
  return name.toLowerCase().indexOf("a") === 0;
}
let startsWithA = drivers.filter(fuzzyMatch);
//console.log(startsWithA);

driver = [
  { name: "seda", hometown: "ankara" },
  { name: "aykut", hometown: "ankara" },
];

function matchName(collection) {
  for (const driver of collection) {
    if (driver.name === "seda") {
      console.log(driver);
    }
  }
}
matchName(driver);
