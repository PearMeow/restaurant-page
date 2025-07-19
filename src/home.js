import foodPic from "./img/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg";

export default function goHome() {
    const pageContent = document.getElementById("content")
    const homeContent = document.createElement("div");
    const homeImg = document.createElement("img");
    const description = document.createElement("p");
    homeImg.src = foodPic;
    description.textContent = "What is the meaning of food?"
    homeContent.appendChild(homeImg);
    homeContent.appendChild(description);
    pageContent.appendChild(homeContent);
}

