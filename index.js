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

function showHomePage() {
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showProjectPage() {
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showLanguagePage() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
}

showHomePage();
