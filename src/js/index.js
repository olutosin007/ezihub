import "core-js/stable";
import "../../node_modules/tiny-slider/dist/tiny-slider.css";
import "../css/animate.css";
import "../css/style.css";

import Isotope from "isotope-layout";
import { tns } from "tiny-slider";
import WOW from "wowjs";
import "../js/typewriter";

window.wow = new WOW.WOW({
  live: false,
});

window.wow.init({
  offset: 50,
});

//========= testimonial
const testimonial = document.querySelectorAll(".testimonial-active");

if (testimonial.length) {
  tns({
    container: ".testimonial-active",
    items: 1,
    slideBy: "page",
    autoplay: false,
    mouseDrag: true,
    gutter: 0,
    nav: false,
    controlsText: [
      `<svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="fill-current"
      >
        <path
          d="M6.52329 10.8331L10.9933 15.3031L9.81496 16.4814L3.3333 9.99978L9.81496 3.51811L10.9933 4.69645L6.52329 9.16645L16.6666 9.16645L16.6666 10.8331L6.52329 10.8331Z"
          
        />
      </svg>`,
      `<svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        class="fill-current"
      >
        <path
          d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
          
        />
      </svg>`,
    ],
  });
}

//============== isotope masonry js

const elem = document.querySelector(".portfolio-grid");

// EZIHUB FIX: Check if portfolio grid exists before initializing isotope
if (elem) {
  const iso = new Isotope(elem, {
    // options
    itemSelector: ".grid-item",
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".grid-sizer",
    },
  });

  const filterButtons = document.querySelectorAll(
    ".portfolio-btn-wrapper button",
  );
  filterButtons.forEach((e) =>
    e.addEventListener("click", () => {
      const filterValue = event.target.getAttribute("data-filter");
      iso.arrange({
        filter: filterValue,
      });
    }),
  );
}

//======= portfolio-btn active
const elements = document.querySelectorAll(".portfolio-btn-wrapper button");
for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    // remove class from sibling

    let el = elements[0];
    while (el) {
      if (el.tagName === "BUTTON") {
        //remove class
        el.classList.remove("active");
      }
      // pass to the new sibling
      el = el.nextSibling;
    }

    this.classList.add("active");
  };
}

(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".header");
    const sticky = ud_header.offsetTop;

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // Mobile Menu
  const menuToggler = document.querySelector(".menu-toggler");
  const menuWrapper = document.querySelector(".menu-wrapper");

  menuToggler.addEventListener("click", () => {
    menuWrapper.classList.toggle("show");
    document.body.classList.toggle("overflow-y-hidden lg:overflow-y-auto");
    menuToggler.querySelector(".cross").classList.toggle("hidden");
    menuToggler.querySelector(".menu").classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document.querySelectorAll(".navbar li:not(.submenu-item) a").forEach((e) =>
    e.addEventListener("click", () => {
      menuWrapper.classList.toggle("show");
      document.body.classList.toggle("overflow-y-hidden lg:overflow-y-auto");
      menuToggler.querySelector(".cross").classList.toggle("hidden");
      menuToggler.querySelector(".menu").classList.toggle("hidden");
    }),
  );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector("a").classList.toggle("active");
      el.querySelector(".submenu").classList.toggle("hidden");
    });
  });

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();

// Document Loaded
document.addEventListener("DOMContentLoaded", () => {
  // ==== darkToggler
  const darkTogglerCheckbox = document.querySelector("#darkToggler");
  const html = document.querySelector("html");

  const darkModeToggler = () => {
    darkTogglerCheckbox.checked
      ? html.classList.remove("dark")
      : html.classList.add("dark");
  };
  darkModeToggler();

  darkTogglerCheckbox.addEventListener("click", darkModeToggler);

  // ===== Waitlist modal + forms
  const modal = document.getElementById("waitlist-modal");
  const waitlistForm = document.getElementById("waitlist-form");
  const successSpan = document.getElementById("waitlist-success");

  function openModal(source) {
    if (!modal) return;
    if (waitlistForm) waitlistForm.dataset.source = source || "hero";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  document.querySelectorAll('[data-open="waitlist-modal"]').forEach((btn) => {
    btn.addEventListener("click", () => openModal(btn.dataset.source));
  });
  modal?.querySelectorAll('[data-close]').forEach((btn) =>
    btn.addEventListener("click", closeModal)
  );

  async function submitForm(form) {
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.source = form.dataset.source || "unknown";
    const honeypot = modal?.querySelector('[data-honeypot] input');
    if (honeypot && honeypot.value) return; // bot
    
    // Basic validation
    if (!payload.email || !payload.consent) {
      console.warn('Form validation failed: missing required fields');
      return;
    }
    
    // Analytics event
    if (typeof gtag !== 'undefined') {
      gtag('event', 'lead_submit_attempt', {
        event_category: 'engagement',
        event_label: payload.source
      });
    }
    
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => null);
    
    if (res && res.ok) {
      // Analytics success event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_submit_success', {
          event_category: 'engagement',
          event_label: payload.source
        });
      }
      
      if (form === waitlistForm) {
        successSpan?.classList.remove('hidden');
        setTimeout(() => { successSpan?.classList.add('hidden'); closeModal(); }, 1400);
      } else {
        const banner = document.createElement('div');
        banner.className = 'mt-4 rounded-sm bg-green-600/20 p-3 text-sm text-green-200';
        banner.textContent = 'Thanks, your message has been sent.';
        form.appendChild(banner);
        setTimeout(() => banner.remove(), 3000);
      }
      form.reset();
    } else {
      // Analytics error event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'lead_submit_error', {
          event_category: 'engagement',
          event_label: payload.source
        });
      }
    }
  }

  waitlistForm?.addEventListener('submit', (e) => { e.preventDefault(); submitForm(waitlistForm); });
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => { e.preventDefault(); submitForm(contactForm); });
  
  // Collapsible Contact form toggle
  const collapseToggle = document.getElementById('contact-collapse-toggle');
  const collapseContent = document.getElementById('contact-collapse-content');
  const collapseArrow = document.getElementById('contact-collapse-arrow');
  if (collapseToggle && collapseContent) {
    collapseToggle.addEventListener('click', () => {
      const isHidden = collapseContent.classList.contains('hidden');
      if (isHidden) {
        collapseContent.classList.remove('hidden');
        collapseArrow?.classList.add('rotate-180');
      } else {
        collapseContent.classList.add('hidden');
        collapseArrow?.classList.remove('rotate-180');
      }
    });
  }
  
  // Newsletter form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(newsletterForm);
      const data = Object.fromEntries(formData.entries());
      data.source = "newsletter";
      data.consent = true; // Newsletter implies consent
      
      const successMessage = document.getElementById('newsletter-success-message');
      const errorMessage = document.getElementById('newsletter-error-message');
      
      successMessage?.classList.add('hidden');
      errorMessage?.classList.add('hidden');
      
      // Analytics event
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_submit_attempt', {
          event_category: 'engagement',
          event_label: 'newsletter'
        });
      }
      
      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          // Analytics success event
          if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_submit_success', {
              event_category: 'engagement',
              event_label: 'newsletter'
            });
          }
          successMessage?.classList.remove('hidden');
          newsletterForm.reset();
        } else {
          // Analytics error event
          if (typeof gtag !== 'undefined') {
            gtag('event', 'newsletter_submit_error', {
              event_category: 'engagement',
              event_label: 'newsletter'
            });
          }
          errorMessage?.classList.remove('hidden');
        }
      } catch (error) {
        // Analytics error event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'newsletter_submit_error', {
            event_category: 'engagement',
            event_label: 'newsletter'
          });
        }
        errorMessage?.classList.remove('hidden');
      }
    });
  }
});
