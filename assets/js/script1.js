
// mobile navbar
(() => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("overlay");

    let open = false;

    const change = () => {
        if (!open) {
            hamburger.classList.add("open");
            menu.classList.add("menu");
        } else {
            hamburger.classList.remove("open");
            menu.classList.remove("menu");
        }
        open = !open;
    };

    hamburger.addEventListener("click", change);
    const links = document.getElementById('overlay').children;
    Array.from(links).forEach(element => {
        element.addEventListener("click", change);
    });
})();
// to implement the countdown 
// code inspired from : https://www.educative.io/edpresso/how-to-create-a-countdown-timer-using-javascript

// The data/time we want to countdown to
var countDownDate = new Date("Mar 5, 2022 9:00:00").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = `<span style="color:#eb1616">${seconds}</span`;


    document.getElementById("days-2").innerHTML = days
    document.getElementById("hours-2").innerHTML = hours
    document.getElementById("minutes-2").innerHTML = minutes
    document.getElementById("seconds-2").innerHTML = `<span style="color:#eb1616">${seconds}</span`

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementsByClassName("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("").innerHTML = "TIME UP!!";
    }
}, 1000);

// for contact icons: hover effect 

let facebook = document.getElementsByClassName('facebook')[0];
facebook.addEventListener('mouseenter', () => {
    facebook.children[0].setAttribute('src', 'assets/images/Facebook1.png')
})
facebook.addEventListener('mouseleave', () => {
    facebook.children[0].setAttribute('src', 'assets/images/Facebook.png')
})

let instagram = document.getElementsByClassName('instagram')[0];
instagram.addEventListener('mouseenter', () => {
    instagram.children[0].setAttribute('src', 'assets/images/Instagram.png')
})
instagram.addEventListener('mouseleave', () => {
    instagram.children[0].setAttribute('src', 'assets/images/Instagram-1.png')
})

let youtube = document.getElementsByClassName('youtube')[0];
youtube.addEventListener('mouseenter', () => {
    youtube.children[0].setAttribute('src', 'assets/images/YouTube.png')
})
youtube.addEventListener('mouseleave', () => {
    youtube.children[0].setAttribute('src', 'assets/images/YouTube-1.png')
})

let linkedin = document.getElementsByClassName('linkedin')[0];
linkedin.addEventListener('mouseenter', () => {
    linkedin.children[0].setAttribute('src', 'assets/images/LinkedIn Circled-1.png')
})
linkedin.addEventListener('mouseleave', () => {
    linkedin.children[0].setAttribute('src', 'assets/images/LinkedIn Circled.png')
})
let whatsapp = document.getElementsByClassName('whatsapp')[0];
whatsapp.addEventListener('mouseenter', () => {
    whatsapp.children[0].setAttribute('src', 'assets/images/Whatsapp-1.png')
})
whatsapp.addEventListener('mouseleave', () => {
    whatsapp.children[0].setAttribute('src', 'assets/images/Whatsapp.png')
})
let gmail = document.getElementsByClassName('gmail')[0];
gmail.addEventListener('mouseenter', () => {
    gmail.children[0].setAttribute('src', 'assets/images/Gmail logo-1.png')
})
gmail.addEventListener('mouseleave', () => {
    gmail.children[0].setAttribute('src', 'assets/images/Gmail logo.png')
})

// faq section
let faqLabel = document.querySelectorAll(".faq-label");

      faqLabel.forEach(item => item.onclick = () => {
        //selektuje Answer
        item.nextElementSibling.classList.toggle('active');


        let labelIcon = item.lastElementChild;
        let icons = labelIcon.lastElementChild;
        icons.classList.toggle('rotate');


      })