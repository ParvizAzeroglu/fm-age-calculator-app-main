// .invalid__span

//   .invalid__header

//   .invalid__input
const [displayDay, displayMonth, displayYear] = [
  document.getElementById("day"),
  document.getElementById("month"),
  document.getElementById("year"),
];

let [day, month, year] = [0, 0, 0];

const [header, input, span] = [
  document.querySelectorAll(".top__item--header"),
  document.querySelectorAll(".top__item--input"),
  document.querySelectorAll(".top__item--invalid"),
];

function clickButton() {
  const [Inputday, InputMonth, InputYear] = [
    document.getElementById("inputDay").value,
    document.getElementById("inputMonth").value,
    document.getElementById("inputYear").value,
  ];

  const [currentDay, currentMonth, currentYear] = [
    new Date().getDate(),
    new Date().getMonth() + 1,
    new Date().getFullYear(),
  ];

  if (!isNaN(Inputday) && !isNaN(InputMonth) && !isNaN(InputYear)) {
    if (
      Inputday >= 1 &&
      Inputday <= 31 &&
      InputMonth >= 1 &&
      InputMonth <= 12 &&
      InputYear >= 1945 &&
      InputYear <= 2023
    ) {
      //***Aaa */
      day = currentDay - Inputday;
      month = currentMonth - InputMonth;
      year = currentYear - InputYear;

      if (month < 0) {
        month += 12;
        year -= 1;
      }
      if (day < 0) {
        month += 31;
        month -= 1;
      }

      displayValues(day, month, year);
      valid();
    } else {
      invalid();
      return;
    }
  } else {
    invalid();
    return;
  }
}

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function daysInFebruary(year) {
//   return isLeapYear(year) ? 29 : 28;
// }

// function totalDaysUntilMonth(month, year) {
//   let totalDays = 0;
//   const daysByMonth = [
//     31,
//     daysInFebruary(year),
//     31,
//     30,
//     31,
//     30,
//     31,
//     31,
//     30,
//     31,
//     30,
//     31,
//   ];

//   for (let i = 0; i < month; i++) {
//     totalDays += daysByMonth[i];
//   }
//   return totalDays;
// }

function displayValues(day, month, year) {
  displayDay.textContent = day;
  displayMonth.textContent = month;
  displayYear.textContent = year;
}

function invalid() {
  header.forEach((item) => {
    item.classList.add("invalid__header");
  });
  input.forEach((item) => {
    item.classList.add("invalid__input");
  });
  span.forEach((item) => {
    item.classList.add("invalid__span");
  });
}

function valid() {
  header.forEach((item) => {
    item.classList.remove("invalid__header");
  });
  input.forEach((item) => {
    item.classList.remove("invalid__input");
  });
  span.forEach((item) => {
    item.classList.remove("invalid__span");
  });
}
