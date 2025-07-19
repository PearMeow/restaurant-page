import pizzaPic from "./ivan-torres-MQUqbmszGGM-unsplash.jpg";
import kebabPic from "./sam-loyd-somKa7kuAmQ-unsplash.jpg";
import milkPic from "./felipepelaquim-3nCRXsHdCNM-unsplash.jpg";
import "./menu.css"

export function goMenu() {
    const pageContent = document.getElementById("content")
    const menuContent = document.createElement("div");
    const pizzaDesc = document.createElement("p");
    const kebabDesc = document.createElement("p");
    const milkDesc = document.createElement("p");
    const pizza = document.createElement("img");
    const kebab = document.createElement("img");
    const milk = document.createElement("img");
    pizza.src = pizzaPic;
    kebab.src = kebabPic;
    milk.src = milkPic;
    pizzaDesc.textContent = "Boneless Pizza - $20";
    kebabDesc.textContent = "Multiple Sticks of Meat - $5";
    milkDesc.textContent = "Pulpless Milk - $3";
    menuContent.classList.add("menu");
    menuContent.appendChild(pizza);
    menuContent.appendChild(pizzaDesc);
    menuContent.appendChild(kebab);
    menuContent.appendChild(kebabDesc);
    menuContent.appendChild(milk);
    menuContent.appendChild(milkDesc);
    pageContent.appendChild(menuContent);

}
