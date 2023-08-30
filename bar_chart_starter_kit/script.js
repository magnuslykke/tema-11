const list = document.querySelector("ul");
const maxColumns = 20;

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

const valueArray = [];
setInterval(generateBarCharts, 1000);

function generateBarCharts() {
  const randomNum = Math.floor(Math.random() * 100 + 1);
  valueArray.push(randomNum);
  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);
  if (list.children.length > maxColumns) {
    list.removeChild(list.firstElementChild);
  }
  if (valueArray.length > 5) {
    valueArray.shift();
  }
  console.log("test om det virker", valueArray);
}
