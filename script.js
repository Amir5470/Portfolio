const sunFrame = "https://s5.ezgif.com/tmp/ezgif-562cb55acebb80b3-gif-im/frame_00_delay-0.17s.gif";
const moonFrame = "https://s5.ezgif.com/tmp/ezgif-562cb55acebb80b3-gif-im/frame_11_delay-0.05s.gif";

const forwardGIF = "https://s5.ezgif.com/tmp/ezgif-529eb59f51b64c81.gif";
const reverseGIF = "https://s5.ezgif.com/tmp/ezgif-54267a40b7801651.gif";

const icon = document.getElementById("themeIcon");
const toggle = document.getElementById("themeToggle");

let dark = false;

const bgElements = document.querySelectorAll(".light-bg");
const txtElements = document.querySelectorAll(".light-txt");
const cardElements = document.querySelectorAll(".light-card");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    dark = true;
    document.body.classList.add("dark-mode");
    icon.src = moonFrame;
    bgElements.forEach(el => el.classList.add("dark-bg"));
    txtElements.forEach(el => el.classList.add("dark-txt"));
    cardElements.forEach(el => el.classList.add("dark-card"));
} else {
    dark = false;
    document.body.classList.remove("dark-mode");
    icon.src = sunFrame;
    bgElements.forEach(el => el.classList.remove("dark-bg"));
    txtElements.forEach(el => el.classList.remove("dark-txt"));
    cardElements.forEach(el => el.classList.remove("dark-card"));
}

toggle.addEventListener("click", () => {
    icon.style.opacity = 0;

    const gif = dark ? reverseGIF : forwardGIF;
    const finalFrame = dark ? sunFrame : moonFrame;

    setTimeout(() => {
        icon.src = gif;
        icon.style.opacity = 1;
    }, 50);

    setTimeout(() => {
        icon.style.opacity = 0;
        icon.src = finalFrame;

        setTimeout(() => {
            icon.style.opacity = 1;
        }, 50);

        document.body.classList.toggle("dark-mode");
        dark = !dark;

        localStorage.setItem("theme", dark ? "dark" : "light");

        if (dark) {
            bgElements.forEach(el => el.classList.add("dark-bg"));
            txtElements.forEach(el => el.classList.add("dark-txt"));
            cardElements.forEach(el => el.classList.add("dark-card"));
        } else {
            bgElements.forEach(el => el.classList.remove("dark-bg"));
            txtElements.forEach(el => el.classList.remove("dark-txt"));
            cardElements.forEach(el => el.classList.remove("dark-card"));
        }

    }, 800);
});
