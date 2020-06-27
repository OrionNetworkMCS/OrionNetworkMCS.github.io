const myHeading = document.querySelector("#ttl");
const myIMG = document.querySelector("img");
const myButton = document.querySelector("#thebutton");
const myButton2 = document.querySelector("#button2");
myIMG.onclick = function () {
  let mySrc = myIMG.getAttribute("src");
  if (
    mySrc ===
    "data:image/png;base64,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"
  ) {
    myIMG.setAttribute(
      "src",
      "data:image/png;base64,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"
    );
  } else {
    myIMG.setAttribute(
      "src",
      "data:image/png;base64,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"
    );
  }
};
function setusername() {
    let myName = prompt('What is your User Name?');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
      }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello ' + myName + '!!!';
};

if(!localStorage.getItem('name')) {
    setusername()
} else {
    let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello ' + storedName;
};

myButton.onclick = function () {
    setusername();
};

myButton2.onclick = function () {
    localStorage.clear();
};

myHeading.onclick = function () {
  alert("Ouch! Stop poking me!");
};
