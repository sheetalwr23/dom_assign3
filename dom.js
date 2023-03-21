//~~~~~~querrySelector
var input = document.querySelector("input");
// console.log(input);
input.value = "hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "send";
// submit.style.backgroundColor = "pink";
//~~~~~~~child member
// var lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

//~~~~Css pseudo selectors
// var secondItem = document.querySelector(".list-group-item:nth-child(1)");
// secondItem.style.backgroundColor = "skyblue";

//~~~~~~~~~~assignment 30 to 37min
var li = document.getElementsByClassName("list-group-item");
li[1].style.backgroundColor = "green";
li[2].style.visibility = "hidden";

//~~~~~~~~querrySelectorAll
//~~~~assignmnet 37 to end
// var titles = document.querySelectorAll(".title");
// titles[0].innerText = "my items";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "green";
//   even[i].style.backgroundColor = "blue";
// }
