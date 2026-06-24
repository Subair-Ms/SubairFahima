// Wedding Date
const weddingDate = new Date("August 23, 2026 11:30:00").getTime();

function updateCountdown() {


const now = new Date().getTime();
const distance = weddingDate - now;

if (distance < 0) {

    document.getElementById("countdown").innerHTML =
        "<h2>💖 Alhamdulillah! Nikkah Day Has Arrived 💖</h2>";

    return;
}

const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
);

const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
);

const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
);

const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

// Journey Star Progress

const star =
    document.getElementById(
        "journeyStar"
    );

if (star) {

    const startDate =
        new Date(
            "January 1, 2026 00:00:00"
        ).getTime();

    const totalDuration =
        weddingDate - startDate;

    const elapsed =
        now - startDate;

    const progress =
        Math.max(
            0,
            Math.min(
                elapsed / totalDuration,
                1
            )
        );

    star.style.left =
        (progress * 100) + "%";
}


}

setInterval(updateCountdown, 1000);
updateCountdown();

// Fade-in animation on scroll
const observer =
new IntersectionObserver(
(entries) => {


entries.forEach(entry => {

    if (
        entry.isIntersecting
    ) {

        entry.target.style.opacity =
            "1";

        entry.target.style.transform =
            "translateY(0px)";
    }

});


},
{
threshold: 0.15
}
);

document
.querySelectorAll(
".card, .section, .hero-image"
)
.forEach(el => {


el.style.opacity = "0";

el.style.transform =
    "translateY(40px)";

el.style.transition =
    "all 0.8s ease";

observer.observe(el);


});

// Floating logo effect
const title =
document.querySelector(
".logo"
);

if (title) {


let direction = 1;

setInterval(() => {

    const current =
        parseInt(
            title.dataset.move ||
            "0"
        );

    let next =
        current + direction;

    if (next > 8)
        direction = -1;

    if (next < -8)
        direction = 1;

    title.dataset.move =
        next;

    title.style.transform =
        `translateY(${next}px)`;

}, 80);


}

// Smooth scroll
document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor => {

anchor.addEventListener(
    "click",
    function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

        if (target) {

            target.scrollIntoView({
                behavior:
                "smooth"
            });

        }

    }
);


});

console.log(
"Nikkah Invitation Loaded Successfully ❤️"
);
