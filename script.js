// =========================
// NEXRON PREMIUM WEBSITE JS
// =========================

// POPUP

const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if (closePopup) {
closePopup.addEventListener("click", () => {
popup.style.display = "none";
});
}

// =========================
// EMAILJS INITIALIZATION
// =========================

// Replace with your EmailJS Public Key

emailjs.init("YOUR_PUBLIC_KEY");

// Lead Form (Popup)

const leadForm = document.getElementById("leadForm");

if (leadForm) {

leadForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.getElementById("leadEmail").value;

if(!email){

alert("Please enter an email address.");

return;

}

const templateParams = {
visitor_email: email
};

emailjs.send(
"YOUR_SERVICE_ID",
"YOUR_TEMPLATE_ID",
templateParams
)

.then(function(){

alert("Thank you! Your free audit request has been received.");

popup.style.display = "none";

})

.catch(function(error){

console.log(error);

alert("Email service is not configured yet.");

});

});

}

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 60;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter, 20);

}else{

counter.innerText = target;

if(target === 100){
counter.innerText = "100+";
}

if(target === 99){
counter.innerText = "99%";
}

if(target === 10){
counter.innerText = "10x";
}

}

};

updateCounter();

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
".service-card,.stat-card,.why-card,.step,.glass-box"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(40px)";
el.style.transition="all .8s ease";

observer.observe(el);

});

// =========================
// NAVBAR SHADOW
// =========================

window.addEventListener("scroll",()=>{

const navbar = document.querySelector(".navbar");

if(window.scrollY > 30){

navbar.style.boxShadow =
"0 10px 40px rgba(0,0,0,.08)";

}else{

navbar.style.boxShadow = "none";

}

});

// =========================
// FLOATING EFFECT
// =========================

const cards = document.querySelectorAll(
".service-card,.stat-card,.why-card"
);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)";

});

});

// =========================
// SMOOTH BUTTON GLOW
// =========================

const buttons = document.querySelectorAll(
".primary-btn,.nav-btn"
);

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow =
"0 0 40px rgba(6,182,212,.6)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow =
"0 0 25px rgba(6,182,212,.35)";

});

});

// =========================
// MOBILE MENU PLACEHOLDER
// =========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

if(navLinks.style.display === "flex"){

navLinks.style.display = "none";

}else{

navLinks.style.display = "flex";
navLinks.style.flexDirection = "column";
navLinks.style.position = "absolute";
navLinks.style.top = "90px";
navLinks.style.right = "20px";
navLinks.style.background = "#fff";
navLinks.style.padding = "20px";
navLinks.style.borderRadius = "16px";
navLinks.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

}

});

}

// =========================
// FUTURE CONTACT FORM
// =========================

// When you add the contact section,
// connect another EmailJS form here.

console.log("NEXRON Website Loaded Successfully");