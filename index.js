console.info(2);
console.debug(2 + 3);
console.warn(56 * 3 - 10);
console.error("app started");

var myName = "Raul";
var age = 19;

console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 30;
console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 31;
console.info("My name is " + myName + ", I'm " + age + " years old.");

// var jobTitle = "<span>Marketing Specialist</span> la Uny";
// var mottoElement = document.getElementById("motto");

// console.info(mottoElement);
// console.warn(mottoElement.innerHTML);

// mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
// mottoElement.innerHTML += " & " + jobTitle;

function hide(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function show(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  hide("skills");
  hide("projects");
  hide("languages");
  hide("home");
}

function showPage(id) {
  console.warn("pls show me this page", id);
  hideAllPages();
  show(id);
}

showPage("home");
