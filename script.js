// 07:05:45PM

function timeConversion(s) {
  let amPm = s.charAt(8);
  let military = "";
  let hour = s.substring(0, 2);
  let min = s.substring(2, 8);
  if (amPm == "A") {
    if (hour == "12") {
      military = "00";
    } else {
      military = hour;
    }
  } else {
    if (hour == "12") {
      military = hour;
    } else {
      military = Number(hour) + 12;
    }
  }

  return military + min;
}

console.log(timeConversion("07:05:45PM"));
