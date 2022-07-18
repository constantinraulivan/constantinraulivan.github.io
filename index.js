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

function hidePage(id) {
  console.info("hide", id);
  document.getElementById(id).style.display = "none";
}
function showPage(id) {
  console.warn("show", id);
  document.getElementById(id).style.display = "block";
}

function showHomePage() {
  hidePage("skills");
  hidePage("projects");
  hidePage("languages");
  showPage("home");
}

function showSkillsPage() {
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  showPage("skills");
}

function showProjectPage() {
  hidePage("skills");
  hidePage("home");
  hidePage("languages");
  showPage("projects");
}

function showLanguagePage() {
  hidePage("projects");
  hidePage("home");
  hidePage("skills");
  showPage("languages");
}

showHomePage();
