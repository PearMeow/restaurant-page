import "./css/styles.css";
import goHome from "./home.js"
import { goMenu } from "./menu.js"
import { default as goAbout } from "./about.js";

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
    goAbout();
})

// Sets page to be on home by default
homeBtn.click();
