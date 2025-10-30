/*console.log("JS file is connected!");

let myName="Amine";
console.log("Hello, my name is "+myName);
let birthyear=2004;
console.log("my birthyear is "+ birthyear);
let age = 2025-birthyear;
console.log("My age is "+age);
console.log("Hi, I'm " + myName + ", and I'm " + age + " years old.");
let mycodinglang=["java","javascript","html","php","css","flutter"];
let codingfor= "10 years";
console.log("I've been learning  "+ mycodinglang[1]+" "+ codingfor);
console.log("I know: " + mycodinglang.join(", "));*/
/*let title = document.getElementById("hero-title");

title.textContent="Welcome to My Portfolio";
title.style.fontSize = "2.5rem";*/

let cvButton=document.getElementById("cv-btn");

cvButton.addEventListener("click", function(){
   cvButton.textContent="Downloading....."});

const themeToggle= document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function(){

document.body.classList.toggle("dark-theme");

if (document.body.classList.contains("dark-theme")) {
    themeToggle.textContent = "🌙 ";
    themeToggle.style.backgroundColor="black";
  } else {
    themeToggle.textContent = "☀️ ";
    themeToggle.style.backgroundColor="white";

  }

});

document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.getElementById("typing-role");
    const text = "Aspiring Full-Stack + AI Developer";
    let index = 0;
  
    function typeNextLetter() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }
  
    const typingInterval = setInterval(typeNextLetter, 100);
  });
  
  