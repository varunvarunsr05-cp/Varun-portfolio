window.addEventListener("load", () => {
    document.querySelector(".hero").classList.add("show");
});

const faders = document.querySelectorAll('.fade');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

faders.forEach(el => observer.observe(el));


const text = "I build modern websites...";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

window.addEventListener("load", typeEffect);

  window.onscroll = () => {
        let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scrollTop / height) * 100;

    document.querySelector(".progress-bar").style.width = scrolled + "%";
  };