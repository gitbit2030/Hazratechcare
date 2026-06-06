const categories = {
  ssd: {
    label: "SSDs",
    title: "Recommended SSDs",
    description: "Fast storage picks for backups, file transfer, laptop upgrades, and safer data handling.",
    products: [
      {
        name: "1TB Portable External SSD",
        badge: "Best for backup",
        price: "INR 5,499",
        use: "Photos, documents, and quick file transfer",
        spec: "USB-C, shock-resistant body",
        note: "Good first backup drive for most home users.",
        link: "#"
      },
      {
        name: "Crucial BX500 240GB 3D NAND SATA 6.35 cm",
        image: "assets/crucial-bx500.png",
        badge: "Upgrade pick",
        price: "INR 5.360",
        use: "Budget upgrade , Faster boot time , Old laptop revival",
        spec: "240GB SATA SSD , Up to 540MB/s read speed , 2.5-inch form factor",
        note: "Affordable SSD upgrade for faster boot and smoother everyday performance.",
        link: "https://amzn.to/4fFyvcn"
      },
      {
        name: "1TB Internal SATA SSD",
        badge: "Upgrade pick",
        price: "INR 4,299",
        use: "Speeding up older desktops and laptops",
        spec: "2.5-inch SATA",
        note: "Useful when replacing a slow hard drive.",
        link: "#"
      }
    ]
  },
  hub: {
    label: "USB Hubs",
    title: "Recommended USB-C Hubs",
    description: "Multiport adapters for laptops that need more ports for monitors, drives, keyboards, and charging.",
    products: [
      {
        name: "7-in-1 USB-C Hub",
        badge: "Best overall",
        price: "INR 1,499",
        use: "Laptop desks and everyday accessories",
        spec: "HDMI, USB-A, USB-C PD, card reader",
        note: "Balanced hub for most slim laptops.",
        link: "#"
      },
      {
        name: "Compact 4-Port USB Hub",
        badge: "Simple pick",
        price: "INR 699",
        use: "Keyboard, mouse, printer, flash drives",
        spec: "USB-A expansion",
        note: "Good for older laptops and desktops.",
        link: "#"
      },
      {
        name: "USB-C Hub with Ethernet",
        badge: "Work pick",
        price: "INR 2,199",
        use: "Stable internet and monitor output",
        spec: "Gigabit LAN, HDMI, PD charging",
        note: "Helpful for work-from-home setups.",
        link: "#"
      }
    ]
  },
  wifi: {
    label: "Wi-Fi",
    title: "Recommended Wi-Fi Products",
    description: "Router and mesh picks for stronger coverage, fewer call drops, and cleaner home network setup.",
    products: [
      {
        name: "Dual-Band Wi-Fi Router",
        badge: "Best for flats",
        price: "INR 2,499",
        use: "Browsing, streaming, and video calls",
        spec: "2.4 GHz and 5 GHz bands",
        note: "Practical choice for small and medium homes.",
        link: "#"
      },
      {
        name: "2-Pack Mesh Wi-Fi Kit",
        badge: "Coverage pick",
        price: "INR 6,999",
        use: "Large homes and weak-signal rooms",
        spec: "Whole-home mesh coverage",
        note: "Better than adding random extenders.",
        link: "#"
      },
      {
        name: "USB Wi-Fi Adapter",
        badge: "Repair pick",
        price: "INR 799",
        use: "Desktop Wi-Fi or weak laptop adapter",
        spec: "Dual-band USB adapter",
        note: "Quick fix when built-in Wi-Fi is unreliable.",
        link: "#"
      }
    ]
  },
  combo: {
    label: "Keyboard Combos",
    title: "Recommended Keyboard and Mouse Combos",
    description: "Comfortable wireless sets for everyday home computer use, office work, study, and browsing.",
    products: [
      {
        name: "Full-Size Wireless Combo",
        badge: "Best everyday",
        price: "INR 1,199",
        use: "Typing, office work, and home browsing",
        spec: "2.4 GHz wireless, full-size layout",
        note: "Simple and familiar for most users.",
        link: "#"
      },
      {
        name: "Compact Keyboard Combo",
        badge: "Small desk",
        price: "INR 999",
        use: "Small tables and laptop stands",
        spec: "Compact layout, wireless mouse",
        note: "Saves space without adding cables.",
        link: "#"
      },
      {
        name: "Silent Keyboard and Mouse",
        badge: "Quiet pick",
        price: "INR 1,499",
        use: "Shared rooms and late-night work",
        spec: "Low-noise keys and clicks",
        note: "Good for families and shared work areas.",
        link: "#"
      }
    ]
  },
  stand: {
    label: "Laptop Stands",
    title: "Recommended Laptop Stands",
    description: "Desk setup picks that improve screen height, airflow, and comfort during longer laptop sessions.",
    products: [
      {
        name: "Adjustable Laptop Stand",
        badge: "Best comfort",
        price: "INR 1,299",
        use: "Work-from-home desk setup",
        spec: "Foldable aluminum-style stand",
        note: "Pair with keyboard and mouse for better posture.",
        link: "#"
      },
      {
        name: "Laptop Cooling Pad",
        badge: "Cooling pick",
        price: "INR 899",
        use: "Warm laptops and long usage",
        spec: "Fan-assisted cooling base",
        note: "Useful for older or heat-prone laptops.",
        link: "#"
      },
      {
        name: "Portable Foldable Stand",
        badge: "Travel pick",
        price: "INR 599",
        use: "Study tables and mobile work",
        spec: "Lightweight foldable design",
        note: "Easy to carry and store.",
        link: "#"
      }
    ]
  },
  headset: {
    label: "Headsets",
    title: "Recommended Headsets",
    description: "Audio picks for calls, online classes, remote support, and clearer voice during meetings.",
    products: [
      {
        name: "USB Headset with Mic",
        badge: "Best for PC",
        price: "INR 999",
        use: "Meetings, classes, and support calls",
        spec: "USB plug-and-play",
        note: "Simple setup for desktops and laptops.",
        link: "#"
      },
      {
        name: "Bluetooth Headset",
        badge: "Multi-device",
        price: "INR 1,799",
        use: "Laptop and phone switching",
        spec: "Wireless Bluetooth connection",
        note: "Good when you move between devices.",
        link: "#"
      },
      {
        name: "Wired 3.5mm Headset",
        badge: "Budget pick",
        price: "INR 599",
        use: "Basic calls and online classes",
        spec: "3.5mm audio jack",
        note: "Check if your laptop supports a combo jack.",
        link: "#"
      }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("category") || "ssd";
const activeKey = categories[requestedCategory] ? requestedCategory : "ssd";
const activeCategory = categories[activeKey];

const pageTitle = document.querySelector("[data-category-title]");
const pageDescription = document.querySelector("[data-category-description]");
const listTitle = document.querySelector("[data-list-title]");
const tabs = document.querySelector("[data-category-tabs]");
const productList = document.querySelector("[data-product-list]");

document.title = `Hazratech™ Care | ${activeCategory.title}`;
pageTitle.textContent = activeCategory.title;
pageDescription.textContent = activeCategory.description;
listTitle.textContent = activeCategory.title;

Object.entries(categories).forEach(([key, category]) => {
  const tab = document.createElement("a");
  tab.href = `recommended-products.html?category=${key}`;
  tab.textContent = category.label;
  tab.classList.toggle("is-active", key === activeKey);
  if (key === activeKey) {
    tab.setAttribute("aria-current", "page");
  }
  tabs.appendChild(tab);
});

activeCategory.products.forEach((product) => {
  const card = document.createElement("article");
  card.className = "recommended-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image">
    <span class="recommended-badge">${product.badge}</span>
    <h3>${product.name}</h3>
    <p>${product.note}</p>
    <ul class="recommended-meta">
      <li><span>Price</span><strong>${product.price}</strong></li>
      <li><span>Best for</span><strong>${product.use}</strong></li>
      <li><span>Key spec</span><strong>${product.spec}</strong></li>
    </ul>
    <a class="button button-primary" href="${product.link}" rel="sponsored nofollow">View Product</a>
  `;

  productList.appendChild(card);
});
