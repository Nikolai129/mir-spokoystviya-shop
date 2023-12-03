// handle of media 800px
document.addEventListener("DOMContentLoaded", function () {
  let mediaQuery800px = window.matchMedia("(max-width: 800px)")
  handleMedia800pxChange(mediaQuery800px);
  function handleMedia800pxChange(e) {
    let menu_burger = document.getElementById("menu_burger");
    // handle click on menu_burger
    menu_burger.onclick = () => {

    }


    if (e.matches) {
      menu_burger.classList.remove("display-none");
      let menu__items = document.getElementsByClassName("menu__item");
      for (let i = 0; i < menu__items.length; i++) {
        menu__items[i].classList.add("animate-jump");
        menu__items[i].classList.add("display-none");
      }
    }
    else {
      menu_burger.classList.add("display-none");
      let menu__items = document.getElementsByClassName("menu__item");
      for (let i = 0; i < menu__items.length; i++) {
        menu__items[i].classList.remove("display-none");
      }
    }
  }
  mediaQuery800px.addListener(handleMedia800pxChange);
});




// // let intervalId = setInterval(autoSwitching, 2000);


// function autoSwitching() {
//   let image = document.getElementsByClassName("img1")[0];
//   image.style.opacity = 0;
//   setTimeout(() => {
//     if (image.src.endsWith("08ab1737604d12bac9fa4d91b99d7a56.jpg")) {
//       image.src = "./img/1970x700/20f26bcd28c3c272dc13ade83c6d0f0a.jpg";
//       image.style.opacity = 1;
//     }
//     else {
//       image.src = "./img/1970x700/08ab1737604d12bac9fa4d91b99d7a56.jpg";
//       image.style.opacity = 1;
//     };
//   }, 500)

// }

// function displayImg1Button() {
//   let image = document.getElementsByClassName("img1")[0];
//   image.src = "./img/1970x700/08ab1737604d12bac9fa4d91b99d7a56.jpg";
//   clearInterval(intervalId);
//   // intervalId = setInterval(autoSwitching, 2000);
// }

// function displayImg2Button() {
//   let image = document.getElementsByClassName("img1")[0];
//   image.src = "./img/1970x700/20f26bcd28c3c272dc13ade83c6d0f0a.jpg";
//   clearInterval(intervalId);
//   // intervalId = setInterval(autoSwitching, 2000);
// }


