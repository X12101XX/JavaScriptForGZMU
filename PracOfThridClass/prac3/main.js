function isLeap(a) {
  if (a % 400 == 0) {
    return true;
  }
  if (a % 100 == 0) {
    return false;
  }
  if (a % 4 == 0) {
    return true;
  }
  return false;
}

let year = parseInt(prompt("Plsease input a year"));
let month = parseInt(prompt("PLease input a month"));

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert("31天");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("30天");
  default:
    if (isLeap(year)) {
      alert("29天");
    } else {
      alert("28天");
    }
}
