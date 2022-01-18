let desc = document.getElementsByClassName('icon-desc');
Array.from(desc).forEach(element => {
    element.style.display = "none";
})
// changing color of icon in nav bar on hover.
let a = document.getElementsByClassName('home');
var activeCurr = document.getElementsByClassName("Home-Page")[0].getAttribute('src');
var activeElement = document.getElementsByClassName("Home-Page")[0];
Array.from(a).forEach(function changeIcons(element, index) {
    let c = element.className.split(' ');
    let curr;
    let temp;
    element.addEventListener('mouseenter', () => {
        temp = element.getAttribute('src');
        element.setAttribute('src', `./assets/images/${c[1]}-3.png`);
        element.children[0].style.color = "red";
        curr = element.getAttribute('src');
    });


    element.addEventListener('click', () => {
        
        if (!element.classList.contains('active')) {
            activeElement.classList.remove('active');
            element.classList.add('active');
            activeElement.setAttribute('src', `${activeCurr}`);
            activeElement = element;
            activeCurr = temp;
        }
    });
    element.addEventListener('mouseleave', () => {
        if (!element.classList.contains('active')) {
            element.setAttribute('src', `${temp}`)
        }

    });
});

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
    element.addEventListener("click",change);
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
    document.getElementById("seconds-2").innerHTML = seconds

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
// NAV BAR IMPLEMENTATION

let fsbtn = document.getElementById('show-all');
let q = 0;
fsbtn.addEventListener('click', function () {
    if (q == 0) {
        fsbtn.classList.add('show-all-fs');
        fsbtn.classList.remove('show-all');

        let circle = document.getElementsByClassName(('circle'))[0];
        circle.classList.remove('circle');
        circle.classList.add('circle-fs');

        let navbar = document.getElementsByClassName(('navbar'))[0];
        circle.classList.add('navbar-fs');
        circle.classList.remove('navbar');

        let iconlist = document.getElementsByClassName('icons-list')[0];
        iconlist.classList.remove('icons-list');
        iconlist.classList.add('icons-list-fs');

        fsbtn.children[0].setAttribute('src', "https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png");

        desc = document.getElementsByClassName('icon-desc');
        Array.from(desc).forEach(element => {
            element.style.display = "block";
        })
        // document.getElementsByClassName('clos-all')[0].style.display="block";
        q = 1;
    }
    else {
        fsbtn.classList.remove('show-all-fs');
        fsbtn.classList.add('show-all');
        let circle = document.getElementsByClassName(('circle-fs'))[0];
        circle.classList.add('circle');
        circle.classList.remove('circle-fs');

        let navbar = document.getElementsByClassName(('navbar-fs'))[0];
        circle.classList.add('navbar');
        circle.classList.remove('navbar-fs');

        let iconlist = document.getElementsByClassName('icons-list-fs')[0];
        iconlist.classList.add('icons-list');
        iconlist.classList.remove('icons-list-fs');

        fsbtn.children[0].setAttribute('src', "https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png");

        let desc = document.getElementsByClassName('icon-desc');
        Array.from(desc).forEach(element => {
            element.style.display = "none";
        })
        // document.getElementsByClassName('clos-all')[0].style.display="none";
        q = 0;
    }
});