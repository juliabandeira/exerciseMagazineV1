const toggle = document.querySelector(".toggle");
const navLinks = document.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// search

const button = document.querySelector(".nav-button");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  input.classList.toggle("display");
});

// cards

const article = document.querySelectorAll(".article");
const mainLink = document.querySelectorAll(".entry-link");
const clickableElements = document.querySelectorAll(".article-links");

clickableElements.forEach((ele) =>
  ele.addEventListener("click", (e) => e.stopPropagation())
);

function handleClick(event) {
  const noTextSelected = !window.getSelection().toString();

  if (noTextSelected) {
    mainLink.forEach((ml) => ml.click());
  }

  console.log(noTextSelected);
}

article.forEach((a) => a.addEventListener("click", handleClick));

console.log(article);
