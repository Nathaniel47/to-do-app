import odinImage from "./odin-lined.png"
import "./styles.css";
import {greeting} from "./greeting.js";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);

console.log(greeting);
