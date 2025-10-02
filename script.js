const data = {
  initials: "GK",
  name: "Ghesya Rhegyta Al Rachman",
  headline: "19 June 2006 • Beauty Enthusiast",
  signature: "Slaying the Web Dev game while keeping my lashes on point ✨",
  location: "Samarinda, Indonesia",
  email: "ghesyarhegyta@gmail.com",
  bio: "Heyy, I’m Ghesya Rhegyta Al Rachman — but just call me Ghesya 💋. Currently a 3rd-semester Informatics student at Mulawarman University who’s totally into the world of Web Development 💻✨. Not just a tech girl tho… I’m also obsessed with makeup and dream of becoming a badass MUA someday 💄🔥. Oh, and one more thing: I’m a certified cheese addict 🧀🤭 — can’t live without it!"
};

document.getElementById("nama").textContent = data.name;
document.getElementById("headline").textContent = data.headline;
document.getElementById("signature").textContent = data.signature;
document.getElementById("location").textContent = data.location;
document.getElementById("email").textContent = data.email;
document.getElementById("bio").textContent = data.bio;
document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
  });

  document.querySelectorAll('a, button, .btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
});

document.addEventListener('mousemove', (e) => {
  const { innerWidth, innerHeight } = window;

  const x = (e.clientX / innerWidth - 0.5) * 2;
  const y = (e.clientY / innerHeight - 0.5) * 2;

  const moveX = x * 50;
  const moveY = y * 50;

  document.body.style.backgroundPosition = `${50 - moveX / 5}% ${50 - moveY / 5}%`;
});

const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! (just a dummy placeholder 😉)");
  form.reset();
});
