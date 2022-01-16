// changing color of icon in nav bar on hover.
let a = document.getElementsByClassName('home');
Array.from(a).forEach(function (element, index) {
    let c = element.className.split(' ');
    let curr = `something`;
    element.addEventListener('mouseenter', () => {
        curr = element.getAttribute('src');
        element.setAttribute('src', `./assets/images/${c[1]}-3.png`);
    });
    element.addEventListener('click', function () {
        let d = document.getElementsByClassName('activePageElement');
        if (d[0].innerHTML != `<img src="../assets/images/${c[1]}-2.png">`) {
            d[0].classList.add('animation');
            setTimeout(function () {
                d[0].innerHTML = `<img src="../assets/images/${c[1]}-2.png">`;
                d[0].classList.remove('animation');
            }, 300);
        }


    })
    element.addEventListener('mouseleave', () => {
        element.setAttribute('src', `${curr}`)
    });

});

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
    if (days == 0) {
        document.getElementById("days").style.display = "none";
        document.getElementById("days-2").style.display = "none";
        document.getElementById("d-head").style.display = "none";

    }
    else {
        document.getElementById("days").innerHTML = days;
        document.getElementById("days-2").innerHTML = days;
    }

    if (hours == 0) {
        document.getElementById("hours").style.display = "none";
        document.getElementById("hours-2").style.display = "none";
        document.getElementById("h-head").style.display = "none";
    }
    else {
        document.getElementById("hours").innerHTML = days;
        document.getElementById("hours-2").innerHTML = days;
    }

    if (minutes == 0) {
        document.getElementById("minutes").style.display = "none";
        document.getElementById("minutes-2").style.display = "none";
        document.getElementById("m-head").style.display = "none";
    }
    else {
        document.getElementById("minutes").innerHTML = days;
        document.getElementById("minutes-2").innerHTML = days;
    }


    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

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
//NAV BAR IMPLEMENTATION
// let f = document.getElementById('show-all');
// const temp = 0;
// f.addEventListener('click', function () {
//     if (temp == 0) {
//         // document.getElementById('circle').classList.remove('circle');
//         document.getElementById('navbar').classList.remove('navbar');
//         document.getElementById('circle').classList.add('show-nav');

//         document.getElementsByClassName('icons-list')[0].classList.add('icons-list-fs');
//         document.getElementsByClassName('icons-list')[0].classList.remove('icons-list');
//         Array.from(document.getElementsByClassName('icon-desc')).forEach(function (element, index) {
//             element.style.display = "block";
//         });

//         document.getElementsByClassName('circle')[0].classList.add('circle-fs');
//         document.getElementsByClassName('circle')[0].classList.remove('circle');
//     }
//     else {
//         document.getElementById('navbar').classList.add('navbar');
//         document.getElementById('circle').classList.remove('show-nav');
//         document.getElementsByClassName('nav-list')[0].classList.add('icons-list');
//         document.getElementsByClassName('icons-list')[0].classList.remove('icons-list-fs'); \
//         Array.from(document.getElementsByClassName('icon-desc')).forEach(function (element, index) {
//             element.style.display = "none";
//         });
//         temp = 0;
//     }
// })

