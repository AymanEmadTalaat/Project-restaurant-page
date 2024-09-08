import "./styles.css";
import { appendHome } from "./home.js";
import { appendMenu } from "./menu.js";
import { appendAbout } from "./about.js";

const btnHome = document.getElementById("home");
const btnMenu = document.getElementById("menu");
const btnAbout = document.getElementById("about");

btnHome.addEventListener("click", appendHome);
btnMenu.addEventListener("click", appendMenu);
btnAbout.addEventListener("click", appendAbout);
