const pageHeader = document.querySelector("[data-header]");
const pageNavToggle = document.querySelector("[data-nav-toggle]");
const pageNav = document.querySelector("[data-nav]");
const infoContactForm = document.querySelector("[data-info-contact-form]");

function updatePageHeader() {
  if (pageHeader) {
    pageHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  }
}

if (pageHeader && pageNavToggle && pageNav) {
  pageNavToggle.addEventListener("click", () => {
    const isOpen = pageHeader.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", isOpen);
    pageNavToggle.setAttribute("aria-expanded", String(isOpen));
    pageNavToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  pageNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      pageHeader.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      pageNavToggle.setAttribute("aria-expanded", "false");
      pageNavToggle.setAttribute("aria-label", "Open navigation");
    }
  });

  updatePageHeader();
  window.addEventListener("scroll", updatePageHeader, { passive: true });
}

if (infoContactForm) {
  infoContactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(infoContactForm);
    const message = [
      "Hello HazraTech Care,",
      "I need computer service.",
      "",
      `Name: ${formData.get("name") || ""}`,
      `Phone: ${formData.get("phone") || ""}`,
      `Service: ${formData.get("service") || ""}`,
      `Message: ${formData.get("message") || ""}`
    ].join("\n");

    window.open(`https://wa.me/919242281562?text=${encodeURIComponent(message)}`, "_blank");
  });
}
