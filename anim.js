// about----------------------------------------------------------------

var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab");
}

//scroll
//----------------------------------------------------------------------
ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.services-container, .portfolio-box,.contact-right', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-col-1', {origin:'left'});
ScrollReveal().reveal('.home-content p, .about-col-2', {origin:'rigth'});
// ScrollReveal().reveal('.robo', {origin:'rigth'});


//text--------------------------------------------------------------------
const typed=new Typed('.multiple-text',{
    strings:['Web Developer','Web Designer','PHP Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    backDelay:1000,
    loop:true
})

