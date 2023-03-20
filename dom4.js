// ~~~~~~~~getElementsByClassName
var list = document.getElementsByClassName("list-group-item");
console.log(list);
// list[0].style.fontWeight = "bold";

list[3].innerHTML = "hello";
list[2].style.backgroundColor = "green";

for (let i = 0; i < list.length; i++) {
  list[i].style.fontWeight = "bold";
}
