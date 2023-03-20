// task2
var headtit = document.getElementById("header-title");
headtit.innerText = "hello";
headtit.textContent = "hello content";
headtit.style.border = "2px solid black";
// task3[i]
var header = document.getElementById("main-header");
header.style.borderBottom = "4px solid black";

// task3[ii]
var list = document.getElementsByClassName("list-group-item");
console.log(list);
// list[0].style.fontWeight = "bold";

list[3].innerHTML = "hello";
list[2].style.backgroundColor = "green";

for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
