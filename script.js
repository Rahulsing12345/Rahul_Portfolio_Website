let hamburger = document.getElementById("hamburger");
let nav = document.getElementsByClassName("nav")[0];
let navList_second = document.getElementsByClassName("nav-list-second")[0];

hamburger.addEventListener("click", ()=> {
    nav.classList.toggle("active-nav"); 
    navList_second.classList.toggle("active-nav-list-second");
    if(nav.classList.contains("active-nav")) {
        hamburger.src="cross.svg";
    } else {
        hamburger.src="/hamburger.svg";
    }
})

var typed = new Typed('#profession', {
    strings: ['Web Developer', 'Software Developer'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  });



//   Skills Section

let htmlprog = document.getElementsByClassName("html-prog")[0];
let cssprog = document.getElementsByClassName("css-prog")[0];
let jsprog = document.getElementsByClassName("js-prog")[0];
let htmlvalue = document.getElementsByClassName("html-value")[0];
let cssvalue = document.getElementsByClassName("css-value")[0];
let jsvalue = document.getElementsByClassName("js-value")[0];

let h = 0;
let c = 0;
let j = 0;
  

let htmlInterval = setInterval(() => {
  h++;
  htmlvalue.innerHTML = `${h}%`;
  htmlprog.style.background = `conic-gradient(rgb(35, 201, 121) ${3.6 * h}deg, rgb(8, 10, 11) 0deg)`;

  if (h == 90) {
      clearInterval(htmlInterval);
  }
}); 


let cssInterval = setInterval(() => {
  c++;
  cssvalue.innerHTML = `${c}%`;
  cssprog.style.background = `conic-gradient(rgb(35, 201, 121) ${3.6 * c}deg, rgb(8, 10, 11) 0deg)`;

  if (c == 85) {
      clearInterval(cssInterval);
  }
}); 


let jsInterval = setInterval(() => {
  j++;
  jsvalue.innerHTML = `${j}%`;
  jsprog.style.background = `conic-gradient(rgb(35, 201, 121) ${3.6 * j}deg, rgb(8, 10, 11) 0deg)`;

  if (j == 70) {
      clearInterval(jsInterval);
  }
}); 
let reactProg = document.getElementsByClassName("inner-react-prog")[0];
let pythonProg = document.getElementsByClassName("inner-python-prog")[0];
let cProg = document.getElementsByClassName("inner-c-prog")[0];
let dsaProg = document.getElementsByClassName("inner-dsa-prog")[0];
let reactValue = document.getElementsByClassName("react-value")[0];
let pythonValue = document.getElementsByClassName("python-value")[0];
let cValue = document.getElementsByClassName("c-value")[0];
let dsaValue = document.getElementsByClassName("dsa-value")[0];

let r = 0, p = 0, cl = 0, d = 0;


let reactInterval = setInterval(() => {
  r++;
  reactValue.innerHTML = `${r}%`; 
  reactProg.style.width = `${(r / 100) * 60}vw`; 
  
  if (r >= 45) { 
      clearInterval(reactInterval);
  }
});


let pythonInterval = setInterval(() => {
  p++;
  pythonValue.innerHTML = `${p}%`; 
  pythonProg.style.width = `${(p / 100) * 60}vw`; 
  
  if (p >= 70) { 
      clearInterval(pythonInterval);
  }
});


let cInterval = setInterval(() => {
  cl++;
  cValue.innerHTML = `${cl}%`; 
  cProg.style.width = `${(cl/ 100) * 60}vw`; 
  
  if (cl >= 45) { 
      clearInterval(cInterval);
  }
});


let dsaInterval = setInterval(() => {
  d++;
  dsaValue.innerHTML = `${d}%`; 
  dsaProg.style.width = `${(d / 100) * 60}vw`; 
  
  if (d >= 55) { 
      clearInterval(dsaInterval);
  }
});



// gsap is a javascript plugin to use animation in website.

let tl = gsap.timeline()
tl.from(".nav",{
  x:-150,
  opacity:0,
  duration: 0.5
})  

tl.from(".left-nav",{
  y:-100,
  opacity:0,
  duration: 0.5
})

tl.from(".list-items",{
  y:-60,
  opacity:0,
  duration: 0.5,
  stagger:1  
})

let tl2 = gsap.timeline()
tl2.from(".line",{
  x:-100,
  opacity:0,
  duration: 0.5,
  stagger:1  
})


tl2.from("#btn",{
  x:-100,
  opacity:0,
  duration: 0.5,
  stagger:1  
})

gsap.from("#logo", {
  x:100,
  opacity:0,
  duration: 0.5,
})

let tl3 = gsap.timeline()
tl3.from(".heading", {
  x:-200,
  opacity:0,
  duration: 0.5,
  scrollTrigger:{
    trigger:".heading",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }
})

tl3.from(".about-details", {
  y:200,
  opacity:0,
  duration: 0.5,
  scrollTrigger:{
    trigger:".about-details",
    scroller:"body",
    start:"top 76%",
    end: "top 56%",
    scrub:2
  }
})

tl3.from(".box", {
  x:200,
  opacity:0,
  duration: 0.5,
  stagger:1,
  scrollTrigger:{
    trigger:".box",
    scroller:"body",
    start:"top 70%",
    end: "top 50%",
    scrub:2
  }
})

let tl4 = gsap.timeline()
tl4.from(".heading-skill", {
  x:-200,
  opacity:0,
  duration: 0.5,
  scrollTrigger:{
    trigger:".heading-skill",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }

})


tl4.from(".prog", {
  x:200,
  rotate:360,
  opacity:0,
  duration: 0.5,
  stagger:1,
  scrollTrigger:{
    trigger:".prog",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }
})

tl4.from(".linear-prog", {
  x:- 200,
  opacity:0,
  duration: 0.5,
  stagger:1,
  scrollTrigger:{
    trigger:".linear-prog",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }  

})
tl4.from(".skill-content", {
  x:- 200,
  opacity:0,
  duration: 0.5,
  stagger:1 ,
  scrollTrigger:{
    trigger:".skill-content",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }

})


let tl5 = gsap.timeline()
tl5.from(".right-contact", {
  x:400,
  duration: 0.5,
  scrollTrigger:{
    trigger:".right-contact",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }
})

tl5.from(".left-contact", {
  x:-400,
  opacity:0,
  duration: 0.5,
  scrollTrigger:{
    trigger:".left-contact",
    scroller:"body",
    start:"top 80%",
    end: "top 60%",
    scrub:2
  }
})

