const colorsName = ["blue", "orange", "pink", "green", "red", "cyan", "yellow"];

const buttonToggleTheme = document.querySelector("button");
const iconButton = document.querySelector("button i");

const buttonChangeColor = document.querySelector(".switch-colors");

buttonToggleTheme.addEventListener("click", function () {
  if (buttonToggleTheme.className == "dark-mode") {
    document.body.className = "dark-" + document.body.className;

    iconButton.className = "ph-sun-dim-fill";
    buttonToggleTheme.className = "light-mode";
  } else {
    const withoutDark = document.body.className.slice(5);

    document.body.className = withoutDark;
    iconButton.className = "ph-moon-stars-fill";
    buttonToggleTheme.className = "dark-mode";
  }
});

function giveRandomNumbers() {
  return Math.floor(Math.random() * colorsName.length);
}

buttonChangeColor.addEventListener("click", function () {
  if (document.body.className.includes("dark-")) {
    buttonChangeColor.style.backgroundColor,
      (document.body.className = "dark-" + colorsName[giveRandomNumbers()]);
  } else {
    buttonChangeColor.style.backgroundColor,
      (document.body.className = colorsName[giveRandomNumbers()]);
  }
});



