//~~~~~~~~~~~getElementByTagName
var li = document.getElementsByTagName("li");
console.log(li[1]);
li[1].textContent = "hello2";
li[1].style.fontWeight = "bold";
