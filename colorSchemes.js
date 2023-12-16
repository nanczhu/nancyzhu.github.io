  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  function color() {
    if (localStorage.getItem("color-mode")) {
      colorMode = localStorage.getItem("color-mode");
    }
    else {
      let rdColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      document.body.style.backgroundColor = localStorage.getItem(rdColor);
    }
