function buttonsHideShow() {
  var submit = document.getElementById("submit");
  if (submit.style.visibility === "hidden") {
    submit.style.visibility = "visible";
  } else {
    submit.style.visibility = "hidden";
  }
  var reset = document.getElementById("reset");
  if (reset.style.visibility === "hidden") {
    reset.style.visibility = "visible";
  } else {
    reset.style.visibility = "hidden";
  }
  var button = document.getElementById("button");
  if (button.style.visibility == "visible") {
    button.style.display = "none";
  } else {
    button.style.visibility = "visible";
  }
  alert("Good job, you finished the form, now all you have to do is to choose wisely.\r\n one option is the correct button, while the clickimg the other means going back.\r\n GOOD LUCK! ");

}  

function resetClick() {
  var submit = document.getElementById("submit");
  if (submit.style.visibility === "hidden") {
    submit.style.visibility = "visible";
  } else {
    submit.style.visibility = "hidden";
  }
  var reset = document.getElementById("reset");
  if (reset.style.visibility === "hidden") {
    reset.style.visibility = "visible";
  } else {
    reset.style.visibility = "hidden";
  }
  var button = document.getElementById("button");
  if (button.style.display == "none") {
    button.style.display = "block";
  } else {
    button.style.visibility = "visible";
  }
  alert("Sorry you pressed the wrong button.\r\n Now start over!");
}

window.onload = function () {
  document.getElementById("button").onclick = (buttonsHideShow);
  document.getElementById("reset").onclick = (resetClick);
}
