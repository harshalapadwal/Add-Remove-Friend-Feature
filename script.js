/*var isstatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");

addFriend.addEventListener("click", function () {
  isstatus.innerHTML = "Friends";
  isstatus.style.color = "green";
});

removeFriend.addEventListener("click", function () {
  removeFriend.innerHTML = "Stranger";
  isstatus.style.color = "red";
});
*/

var isstatus = document.querySelector("h5");
var btn = document.querySelector("#add");
var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    isstatus.innerHTML = "Friend";
    isstatus.style.color = "green";
    cursor: pointer;
    btn.innerHTML = "Remove Friend";
    check = 1;
  } else {
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    btn.innerHTML = "Add Friend";

    check = 0;
  }
});
