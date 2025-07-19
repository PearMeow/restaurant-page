import "./styles.css";
import goHome from "./home.js"
import { goMenu } from "./menu.js"

console.log("henlo");

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const content = document.getElementById("content");

homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    goHome();
})

menuBtn.addEventListener("click", () => {
    content.replaceChildren();
    goMenu();
})

aboutBtn.addEventListener("click", () => {
    content.replaceChildren();
    // goAbout();
    // then do something with the imported aboutBtn function
})

// Sets page to be on home by default
homeBtn.click();
