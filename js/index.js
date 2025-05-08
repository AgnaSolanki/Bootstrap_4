// Testimonial slider
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

// Navbar animation
const navContainer = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navContainer.classList.remove("animate-all");
    navContainer.classList.add("animate-all");

    // Reset scroll animations
    const scrollEls = document.querySelectorAll(".scroll-animate");
    scrollEls.forEach((el) => {
      el.classList.remove("visible");
      observer.observe(el);
    });
  });
});

// CTA banner animation
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
    { threshold: 0.5 }
  );
  observer.observe(banner);
});

// Video modal logic
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

// Scroll animation observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animate");
  elements.forEach((el) => observer.observe(el));
});

function showSections(page, addToHistory = true) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("show");
  });

  const navbar = document.getElementById("mainNav");

  // Hide navbar on "comming"
  if (page === "comming") {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

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
      "section9",
      "section10",
      "section12",
    ],
    services: ["section14", "section4", "section5", "section9", "section12"],
    serviceDetails: [
      "section29",
      "section30",
      "section31",
      "section9",
      "section12",
    ],
    portfolio: ["section10", "section9", "section24", "section15", "section12"],
    faq: ["section16", "section9", "section26", "section12"],
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

// On first load
window.onload = () => {
  const hash = location.hash.replace("#", "") || "home";
  showSections(hash, false);
};

// Additional CTA animation check
document.addEventListener("DOMContentLoaded", function () {
  const ctaBanner = document.querySelector(".cta-banner");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function checkVisibility() {
    if (isInViewport(ctaBanner)) {
      ctaBanner.classList.add("animate");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});

// Mobile navbar toggle
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    const navbarNav = document.querySelector(".navbar-nav");
    navbarNav.classList.remove("animate-all");
  });

// Circle arrow button active state
const buttons = document.querySelectorAll(".circle-arrow");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
