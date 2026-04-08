const square = document.getElementById("square");
const triangle1 = document.getElementById("triangle1");
const reverseTriangle1 = document.getElementById("reverseTriangle1");
const triangle2 = document.getElementById("triangle2");
const reverseTriangle2 = document.getElementById("reverseTriangle2");
const rhombus = document.getElementById("rhombus");
const rhombus2 = document.getElementById("rhombus2")

for (let i = 1; i <= 5; ++i) {
  square.innerHTML += "*****<br>";
}

for (let i = 1; i <= 5; ++i) {
  for (let j = 1; j <= i; ++j) {
    triangle1.innerHTML += '*';
  }
  triangle1.innerHTML += "<br>"
}

for (let i = 5; i >= 1; --i) {
  for (let j = i; j >= 1; --j) {
    reverseTriangle1.innerHTML += '*';
  }
  reverseTriangle1.innerHTML += "<br>"
}

// *
// ***
// *****
// *******
// *********

for (let i = 1; i <= 5; ++i) {
  for (let j = 1; j <= 5 - i; ++j) {
    triangle2.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    triangle2.innerHTML += '*';
  }
  triangle2.innerHTML += "<br>"
}
for (let i = 5; i >= 1; --i) {
  for (let j = 1; j <= 5 - i; ++j) {
    reverseTriangle2.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    reverseTriangle2.innerHTML += '*';
  }
  reverseTriangle2.innerHTML += "<br>"
}

for (let i = 1; i <= 4; ++i) {
  for (let j = 1; j <= 5 - i; ++j) {
    rhombus.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    rhombus.innerHTML += '*';
  }
  rhombus.innerHTML += "<br>"
}
for (let i = 5; i >= 1; --i) {
  for (let j = 1; j <= 5 - i; ++j) {
    rhombus.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    rhombus.innerHTML += '*';
  }
  rhombus.innerHTML += "<br>"
}

for (let i = 1; i <= 4; ++i) {
  for (let j = 1; j <= 5 - i; ++j) {
    rhombus2.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    if (!(j == 1 || j == (i * 2 - 1))) {
      rhombus2.innerHTML += "&nbsp&nbsp"
    } else {
      rhombus2.innerHTML += '*';
    }
  }
  rhombus2.innerHTML += "<br>"
}
for (let i = 5; i >= 1; --i) {
  for (let j = 1; j <= 5 - i; ++j) {
    rhombus2.innerHTML += "&nbsp&nbsp"
  }
  for (let j = 1; j <= (i * 2 - 1); ++j) {
    if (!(j == 1 || j == (i * 2 - 1))) {
      rhombus2.innerHTML += "&nbsp&nbsp"
    } else {
      rhombus2.innerHTML += '*';
    }
  }
  rhombus2.innerHTML += "<br>"
}
