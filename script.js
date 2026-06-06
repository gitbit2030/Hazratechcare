const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

navToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  }
});

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {
whatsappBtn.addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const address = document.getElementById("address").value;

    const message =
`Hello HazraTech Care,
I need computer service.

Name: ${name}
Phone: ${phone}
Address: ${address}
Service: ${service}`;
    const whatsappURL =
`https://wa.me/919242281562?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});
}
