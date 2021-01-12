const dateInput = document.querySelector("#date");
const monthInput = document.querySelector("#month");
const button = document.querySelector("#submit");
const wrapper = document.querySelector(".card");
let minDate = 1;
let maxDate = 31;
let maxMonth = 12;

function message(msg) {
  let message = document.createElement("h1");
  message.innerText = msg;
  message.className = "message";
  wrapper.appendChild(message);
}

function primeChecker(unparsedValue) {
  let primeNumber = true;
  let parsedValue = parseInt(unparsedValue);
  console.log(parsedValue);
  for (let i = 2; i < parsedValue; i++) {
    if (parsedValue % i == 0) {
      primeNumber = false;
      break;
    }
  }
  if (primeNumber == true) {
    message("Your birth-date is a prime number");
  } else {
    message("Your birth-date is not a prime number");
  }
}

function clickHandler() {
  let date = dateInput.value;
  let month = monthInput.value;

  let unparsedValue = date + month;

  if (isNaN(date) || isNaN(month)) {
    message("Please enter input in numbers");
  } else if (date == "" || month == "") {
    message("Fields Should Not Be Empty");
  } else if (date > maxDate || month > maxMonth)
    message(
      `It should not exceed ${maxDate} for days and ${maxMonth} for month`
    );
  else {
    primeChecker(unparsedValue);
  }
}

button.addEventListener("click", clickHandler);
