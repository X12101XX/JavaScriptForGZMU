let age = 18, sex = 'M';

/* if (month > 12 || month <= 0) {
  alert("你确定这是月份？");
} else {
  switch (Math.floor((month + 2) / 3)) {
    case 1:
      alert("春季");
      break;
    case 2:
      alert("夏季");
      break;
    case 3:
      alert("秋季");
      break;
    case 4:
      alert("冬季");
      break;
  }
} */

if (age >= 16 && sex == 'M') {
  alert("符合");
} else {
  alert("不符合");
}

if (age >= 16) {
  if (sex == 'M') {
    alert("符合");
  } else {
    alert('不符合性别')
  }
} else {
  if (sex == 'M') {
    alert("不符合年龄")
  } else {
    alert("年龄和性别都不符合")
  }
}
