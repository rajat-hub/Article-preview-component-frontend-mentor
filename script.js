console.log("hi 123");

const arrow=document.querySelector('.arrow');
const share =document.querySelector('.share');

console.log("arrow",arrow);
console.log("share",share);
arrow.addEventListener("click", function () {
    console.log("hi 456")
    share.classList.toggle("show");
  });

