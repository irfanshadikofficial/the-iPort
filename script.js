//Typing Script
var typed = new Typed(".typing", {
    strings:["Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer","Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer","Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer","Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer","Web Developer", "Web Designer", "Youtuber", "Blogger", "Programmer"],
    typeSpeed:80,
    backSpeed:80,})
//typo
var typo = new Typed(".typo", {
    strings:["Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour","Hello There", "Howdy", "Greeting", "Hi", "Bonjour"],
    typeSpeed:100,
    backSpeed:100,})
//Show / Hide Nab Menu
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//Close Nav Menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav);