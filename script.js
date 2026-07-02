// Wedding Date
const weddingDate = new Date("August 23, 2026 11:30:00").getTime();

function startOpeningReveal() {
    const openingMask = document.querySelector('.opening-mask');
    const pageShell = document.querySelector('.page-shell');
    const openButton = document.getElementById('openInvitation');

    if (!openingMask || !pageShell) return;
    if (openingMask.classList.contains('opening-in-progress')) return;

    openingMask.classList.add('opening-in-progress');
    if (openButton) {
        openButton.disabled = true;
        openButton.setAttribute('aria-busy', 'true');
    }

    document.body.classList.add('opening-active');
    openingMask.classList.remove('is-hidden');
    openingMask.classList.add('opened');
    pageShell.classList.remove('revealed');

    window.setTimeout(() => {
        openingMask.classList.add('is-hidden');
        openingMask.classList.remove('opened');
        openingMask.classList.remove('opening-in-progress');
        document.body.classList.remove('opening-active');
        pageShell.classList.add('revealed');

        if (openButton) {
            openButton.disabled = false;
            openButton.removeAttribute('aria-busy');
        }

        const homeSection = document.getElementById('home');
        if (homeSection) {
            window.setTimeout(() => {
                homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
        }
    }, 1000);
}

function setupOpeningTrigger() {
    const cta = document.querySelector('.opening-mask__cta');

    if (!cta) return;

    cta.addEventListener('click', () => {
        startOpeningReveal();
    });
}

if (document.readyState === 'loading') {
    window.addEventListener('load', setupOpeningTrigger);
} else {
    setupOpeningTrigger();
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        const entryDays = document.getElementById("entryDays");
        const entryHours = document.getElementById("entryHours");
        const entryMinutes = document.getElementById("entryMinutes");
        const entrySeconds = document.getElementById("entrySeconds");
        const message = document.getElementById("openingMessage");
        const hearts = document.querySelector(".heart-popper");

        if (entryDays) entryDays.textContent = "0";
        if (entryHours) entryHours.textContent = "0";
        if (entryMinutes) entryMinutes.textContent = "0";
        if (entrySeconds) entrySeconds.textContent = "0";
        if (message) message.textContent = "Alhamdulillah, Nikkah Day has arrived";
        if (hearts) hearts.classList.add("pop");
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

    const entryDays = document.getElementById("entryDays");
    const entryHours = document.getElementById("entryHours");
    const entryMinutes = document.getElementById("entryMinutes");
    const entrySeconds = document.getElementById("entrySeconds");

    if (entryDays) entryDays.textContent = days;
    if (entryHours) entryHours.textContent = hours;
    if (entryMinutes) entryMinutes.textContent = minutes;
    if (entrySeconds) entrySeconds.textContent = seconds;

    const star = document.getElementById("journeyStar");
    if (star) {
        const startDate = new Date("January 1, 2026 00:00:00").getTime();
        const totalDuration = weddingDate - startDate;
        const elapsed = Math.max(0, Math.min(now - startDate, totalDuration));
        const progress = totalDuration > 0 ? elapsed / totalDuration : 0;

        star.style.left = `${progress * 100}%`;
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
