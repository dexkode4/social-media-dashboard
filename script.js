const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

// if (currentTheme) {
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         toggleSwitch.checked = true;
//     }
// }

function switchTheme(e) {
  var element = document.body;

  if (e.target.checked) {
    element.classList.add("light");
  } else {
    element.classList.remove("light");
  }
  // if (e.target.checked) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     // localStorage.setItem('theme', 'dark');
  // }
  // else {        document.documentElement.setAttribute('data-theme', 'light');
  //     //   localStorage.setItem('theme', 'light');
  // }
}

toggleSwitch.addEventListener("change", switchTheme, false);
