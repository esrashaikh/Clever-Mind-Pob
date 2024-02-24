// function SelectedItem(clickedItem) {
//   var item = clickedItem;
//   var icon = item.querySelector("i");

//   if (item.classList.contains("selected")) {
//     item.style.textDecoration = "";
//     item.style.color = "";

//     if (icon) {
//       icon.style.border = "";
//       icon.style.background = "";
//       icon.style.color = "";
//     }

//     item.classList.remove("selected");
//   } else {
//     item.style.textDecoration = "line-through";
//     item.style.color = "#78777a";

//     if (icon) {
//       icon.style.border = "none";
//       icon.style.background = "#3c70ff";
//       icon.style.color = "#fff";
//     }

//     item.classList.add("selected");
//   }
// }

function Displaylinks() {
  var _listConatiner = document.getElementById("links");

  if (_listConatiner.style.display === "none") {
    _listConatiner.style.display = "block";
  } else {
    _listConatiner.style.display = "none";
  }
}
