const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
 
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
let country1 = document.querySelector(".india");
country1.addEventListener("click",function (){
  let begineer = document.querySelector(".beginner");
  begineer.innerText = "₹3999";
  let intermediate = document.querySelector(".intermediate");
  intermediate.innerText = "₹5999";
  let advanced = document.querySelector(".advanced");
  advanced.innerText = "₹9999";
});

let country2 = document.querySelector(".usa");
country2.addEventListener("click",function (){
  let begineer = document.querySelector(".beginner");
  begineer.innerText = "$25.99";
  let intermediate = document.querySelector(".intermediate");
  intermediate.innerText = "$35.99";
  let advanced = document.querySelector(".advanced");
  advanced.innerText = "$49.99";
});
