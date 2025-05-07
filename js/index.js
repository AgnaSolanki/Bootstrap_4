// textimonial

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const cardWidth = slider.querySelector(".testimonial-card").offsetWidth + 300;

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

const navContainer = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.classList.remove("animate-all");

    navContainer.classList.add("animate-all");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector(".cta-banner");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  // Start observing the .cta-banner
  observer.observe(banner);
});
const videoModal = document.getElementById("videoModal");
const videoIframe = document.getElementById("videoIframe");
const videoTrigger = document.getElementById("videoTrigger");
const videoBtn = document.getElementById("videoModalBtn");
const closeVideoModal = document.getElementById("closeVideoModal");
const closeBtn = document.getElementById("closeBtn");

const youtubeURL = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1";

function openModal() {
  videoModal.classList.remove("d-none");
  videoIframe.src = youtubeURL;
}

function closeModal() {
  videoModal.classList.add("d-none");
  videoIframe.src = "";
}

videoTrigger.addEventListener("click", openModal);
videoBtn.addEventListener("click", openModal);
closeVideoModal.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate once
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

//show section

function showSections(page) {
  // Hide all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("show");
  });

  const navbar = document.getElementById("mainNav");
  if (page === "comming") {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }
  // Control what sections to show
  const pages = {
    home: [
      "section1",
      "section2",
      "section3",
      "section4",
      "section5",
      "section6",
      "section7",
      "section8",
      "section9",
      "section10",
      "section11",
      "section12",
    ],
    about: [
      "section13",
      "section2",
      "section3",
      "section4",
      "section10",
      "section12",
    ],
    services: ["section14", "section4", "section5", "section9", "section12"],

    portfolio: ["section10", "section24", "section15", "section12"],
    faq: ["section16", "section26", "section12"],
    team: ["section17", "section25", "section9", "section12"],
    price: ["section18", "section27", "section12"],
    404: ["section19", "section12"],
    comming: ["section28"],
    blog: ["section20", "section21", "section9", "section12"],
    contact: ["section23", "contactMap", "section22", "section12"],
  };

  if (pages[page]) {
    pages[page].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.add("show");
    });
  }
}
// Show all by default on page load
window.onload = () => showSections("home");

document.addEventListener("DOMContentLoaded", function () {
  const ctaBanner = document.querySelector(".cta-banner");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
    if (isInViewport(ctaBanner)) {
      ctaBanner.classList.add("animate");
      window.removeEventListener("scroll", checkVisibility); // run only once
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // in case it's already visible
});
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbarNav = document.querySelector(".navbar-nav");
    navbarNav.classList.remove("animate-all");
  });
