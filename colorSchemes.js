function color() {
if(localStorage.getItem("color-mode", "dark"))
{
     setItem("color-mode", "dark");
     let DarkMode = getItem("color-mode");
 }
 else {
     window.localStorage.setItem("color-mode", "dark");
     let DarkMode = window.localStorage.getItem("color-mode");
 }
