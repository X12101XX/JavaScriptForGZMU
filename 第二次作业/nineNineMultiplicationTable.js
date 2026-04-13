const table = document.getElementById("mul-table");

for (let i = 1; i <= 9; ++i) {
  const tr = document.createElement('tr');
  for (let j = 1; j <= i; ++j) {
    const td = document.createElement('td');
    td.textContent = `${j} * ${i} = ${i * j}`;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
