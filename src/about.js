import "./css/about.css"

export default function weirdName() {
    const pageContent = document.getElementById("content");
    const aboutContent = document.createElement("div");
    const about = document.createElement("p");
    aboutContent.classList.add("aboutText");
    about.textContent = "We are a team of experienced food eaters dedicated to serving you the most";
    about.textContent += " delicious food possible. Whether you eat to live or live to eat, there will";
    about.textContent += " most certainly be an option for you at this fine establishment. Uhh, what else";
    about.textContent += " was on the script again? Huh? Why are we converting what we say into text instead ";
    about.textContent += " of just putting the text in the script on the page? I don't know man, I just work here.";
    aboutContent.appendChild(about);
    pageContent.appendChild(aboutContent);
}
