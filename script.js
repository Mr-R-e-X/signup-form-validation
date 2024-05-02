let form = document.querySelector("#signup-form");
let emailDiv = document.querySelector("#email-div");
let passDiv = document.querySelector("#pass-div");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");

p1.innerText = `Make sure email is more than 3 characters and has @ and a .`;
p2.innerText = `Make sure password is more than 8 characters.`;
p3.innerText = `All good to go!`;

p1.classList.add("text-lg", "text-red-500", "my-3");
p2.classList.add("text-lg", "text-red-500", "my-3");
p3.classList.add("text-lg", "text-green-500", "my-3");

p1.style.display = "block";
p2.style.display = "block";
p3.style.display = "none";

emailDiv.appendChild(p1);
passDiv.appendChild(p2);
passDiv.appendChild(p3);

let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let flag = { emailflag: false, passflag: false };

email.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (regex.test(value)) {
    p1.style.display = "none";
    flag.emailflag = true;
    allGood(flag);
  } else {
    p1.style.display = "block";
    flag.emailflag = false;
    allGood(flag);
  }
});
password.addEventListener("keyup", (e) => {
  let value = e.target.value;
  if (value.length >= 8) {
    p2.style.display = "none";
    flag.passflag = true;
    allGood(flag);
  } else {
    p2.style.display = "block";
    flag.passflag = false;
    allGood(flag);
  }
});

function allGood(flag) {
  if (flag.emailflag && flag.passflag) {
    p3.style.display = "block";
  } else {
    p3.style.display = "none";
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
