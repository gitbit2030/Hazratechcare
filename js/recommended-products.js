const categories = {
  ssd: {
    label: "SSDs",
    title: "Recommended SSDs",
    description: "Fast storage picks for backups, file transfer, laptop upgrades, and safer data handling.",
    products: [
      {
        id: "zebronics-256gb-m2",
        name: "Zebronics 256GB M.2",
        image: "assets/Zebronics 256GB M.2.png",
        badge: "Upgrade pick",
        price: "INR 4,970",
        use: "Windows upgrade, office work, students, video storage",
        spec: "NVMe PCIe, 2200MB/s Read, 1600MB/s Write",
        note: "A budget-friendly NVMe SSD that delivers excellent everyday performance. Ideal for upgrading older systems or building a portable SSD using an NVMe enclosure.",
        link: "#",
        controller: "Maxio MAP1602",
        nand: "TLC NAND",
        dram: "DRAM-less",
        technicalSpecs: [
            "Controller: Maxio MAP1602",
            "NAND: TLC NAND",
            "DRAM: DRAM-less",
            "Read Speed: 2200MB/s",
            "Write Speed: 1600MB/s",
            "Interface: PCIe Gen3 x4"
        ],
        warranty: "Check current seller/manufacturer warranty before purchase.",
        pros: [
          "Budget-friendly NVMe upgrade for everyday use",
          "Much faster than a traditional hard drive",
          "Useful for laptop upgrades or portable SSD builds"
        ],
        cons: [
          "Controller, NAND, and DRAM details are not clearly published",
          "Not the best choice for heavy professional write workloads",
          "Warranty details should be verified before buying"
        ],
        verdict: "Good value pick for normal home and office users who want an affordable speed upgrade.",
        compatibility: "Works with systems that support M.2 NVMe PCIe SSDs. Not compatible with SATA-only M.2 slots.",
        technicianNote: "Before buying, check the laptop or motherboard manual for M.2 slot type, supported length, and NVMe boot support."
      },
      {
        id: "crucial-bx500-240gb",
        name: "Crucial BX500 240GB 3D NAND SATA 6.35 cm",
        image: "assets/crucial-bx500.png",
        badge: "Upgrade pick",
        price: "INR 5.360",
        use: "Budget upgrade , Faster boot time , Old laptop revival",
        spec: "240GB SATA SSD , Up to 540MB/s read speed , 2.5-inch form factor",
        note: "Affordable SSD upgrade for faster boot and smoother everyday performance.",
        link: "#",
        controller: "Not officially disclosed by Crucial",
        nand: "Micron 3D NAND",
        dram: "DRAM-less design",
        technicalSpecs: [
            "Storage Capacity: 240GB",
            "Interface: SATA III (6Gb/s)",
            "Form Factor: 2.5-inch (6.35 cm)",
            "NAND Flash: Micron 3D NAND",
            "Sequential Read Speed: Up to 540MB/s",
            "Sequential Write Speed: Up to 500MB/s",
            "DRAM: DRAM-less design",
            "Controller: Not officially disclosed by Crucial"
        ],
        warranty: "Limited warranty may vary by region and seller. Verify before purchase.",
        pros: [
          "Simple upgrade for older laptops and desktops",
          "Good boot-drive option for basic home use",
          "2.5-inch SATA format fits many older systems"
        ],
        cons: [
          "Lower capacity fills quickly with large media files",
          "Not as fast as NVMe SSDs",
          "DRAM-less design is not ideal for heavy sustained workloads"
        ],
        verdict: "A practical SATA SSD for reviving old laptops or desktops when the system does not support NVMe.",
        compatibility: "Works with laptops and desktops that support 2.5-inch SATA drives. Check drive bay size and connector before purchase.",
        technicianNote: "Best for replacing a slow hard drive. Clone or back up important files before installation."
      },
      {
        id: "cablet-m2-nvme-ngff-enclosure",
        name: "Cablet M.2 NVMe/NGFF SSD Enclosure USB 3.1 Gen2",
        image: "assets/cablet-ssd-enclosure.png",
        badge: "Portable SSD maker",
        price: "INR 1,199",
        use: "Convert NVMe SSD into portable SSD, Mobile video storage, Fast file transfer",
        spec: "USB 3.1 Gen2 10Gbps, Supports NVMe & NGFF SSD, 2242/2260/2280, UASP, Up to 2TB",
        note: "Aluminium enclosure that turns an internal SSD into a high-speed portable SSD for laptops, PCs, and smartphones.",
        link: "#",
        controller: "Bridge controller not specified by manufacturer",
        nand: "Not applicable. This is an enclosure, not an SSD.",
        dram: "Not applicable. This is an enclosure, not an SSD.",
        technicalSpecs: [
            "Interface: USB 3.1 Gen2 (10Gbps)",
            "Supports: NVMe PCIe & NGFF (SATA) M.2 SSDs",
            "Supported Sizes: 2242 / 2260 / 2280",
            "Maximum Capacity: Up to 2TB",
            "Protocol Support: UASP",
            "Material: Aluminium Alloy Body",
            "Tool-Free Installation: Yes (verify with seller)",
            "Controller Chip: Not specified by manufacturer"
        ],
        warranty: "Check current seller/manufacturer warranty before purchase.",
        pros: [
          "Turns a spare M.2 SSD into portable storage",
          "Supports common M.2 lengths",
          "Useful for backups, transfers, and mobile video storage"
        ],
        cons: [
          "Actual speed depends on the SSD, cable, and USB port",
          "May get warm during long transfers",
          "Compatibility should be checked carefully before buying"
        ],
        verdict: "Useful accessory if you already have or plan to buy an M.2 SSD for portable storage.",
        compatibility: "Supports listed M.2 NVMe and NGFF SSD sizes. Verify your SSD key type and protocol before purchase.",
        technicianNote: "For best speed, use a USB 3.1 Gen2 or better port and avoid low-quality cables."
      }
    ]
  },
  // hub: {
  //   label: "USB Hubs",
  //   title: "Recommended USB-C Hubs",
  //   description: "Multiport adapters for laptops that need more ports for monitors, drives, keyboards, and charging.",
  //   products: [
  //     {
  //       name: "7-in-1 USB-C Hub",
  //       badge: "Best overall",
  //       price: "INR 1,499",
  //       use: "Laptop desks and everyday accessories",
  //       spec: "HDMI, USB-A, USB-C PD, card reader",
  //       note: "Balanced hub for most slim laptops.",
  //       link: "#"
  //     },
  //     {
  //       name: "Compact 4-Port USB Hub",
  //       badge: "Simple pick",
  //       price: "INR 699",
  //       use: "Keyboard, mouse, printer, flash drives",
  //       spec: "USB-A expansion",
  //       note: "Good for older laptops and desktops.",
  //       link: "#"
  //     },
  //     {
  //       name: "USB-C Hub with Ethernet",
  //       badge: "Work pick",
  //       price: "INR 2,199",
  //       use: "Stable internet and monitor output",
  //       spec: "Gigabit LAN, HDMI, PD charging",
  //       note: "Helpful for work-from-home setups.",
  //       link: "#"
  //     }
  //   ]
  // },
  wifi: {
    label: "Wi-Fi",
    title: "Recommended Wi-Fi Products",
    description: "Router and mesh picks for stronger coverage, fewer call drops, and cleaner home network setup.",
    products: [
    {
      id: "tp-link-ac750",
      name: "TP-Link AC750 Dual Band Wi-Fi Router",
      image: "assets/TP-Link AC750.png",
      badge: "Home pick",
      price: "INR 1,999",
      use: "Home internet, online classes, office work, HD streaming",
      spec: "Dual Band 2.4GHz + 5GHz, Up to 733Mbps Wireless Speed",
      note: "An affordable dual-band router suitable for small homes and apartments. Provides stable Wi-Fi for everyday internet use, video streaming, and work-from-home needs.",
      link: "#",
      controller: "Router SoC not specified in the public listing",
      nand: "Not applicable. This is a router, not a storage device.",
      dram: "Not specified in the public listing",

      technicalSpecs: [
      "Dual Band 2.4GHz + 5GHz",
      "Up to 733Mbps",
      "3 × LAN Ports",
      "1 × WAN Port",
      "Supports WPA2 Security"
      ],

      warranty: "Typically 3-Year Manufacturer Warranty (verify with seller before purchase).",

      pros: [
          "Affordable dual-band Wi-Fi router",
          "Separate 2.4GHz and 5GHz networks for better performance",
          "Easy setup using TP-Link Tether App",
          "Suitable for HD streaming and online meetings",
          "Reliable brand with good service support"
      ],

      cons: [
          "Fast Ethernet ports (100Mbps), not Gigabit",
          "Not suitable for internet plans above 100Mbps",
          "Coverage may be limited in large multi-storey homes"
      ],

      verdict: "Excellent budget router for small homes with broadband connections up to 100Mbps. A reliable choice for everyday internet use.",

      compatibility: "Compatible with most broadband connections including Fiber, DSL (with modem), and cable internet services. Works with Windows, macOS, Android, iPhone, Smart TVs, and gaming consoles.",

      technicianNote: "If your broadband plan is faster than 100Mbps or you need high-speed file transfers over LAN, consider a Gigabit router such as the TP-Link Archer C6 or Archer AX series instead."
    },
      //   name: "Dual-Band Wi-Fi Router",
      //   badge: "Best for flats",
      //   price: "INR 2,499",
      //   use: "Browsing, streaming, and video calls",
      //   spec: "2.4 GHz and 5 GHz bands",
      //   note: "Practical choice for small and medium homes.",
      //   link: "#"
      // },
      {
        id: "mesh-wifi-kit-2-pack",
        name: "2-Pack Mesh Wi-Fi Kit",
        image: "assets/Wi-Fi extender.png",
        badge: "Coverage pick",
        price: "INR 6,999",
        use: "Large homes and weak-signal rooms",
        spec: "Whole-home mesh coverage",
        note: "Better than adding random extenders.",
        link: "#",
        controller: "Mesh chipset not specified in the public listing",
        nand: "Not applicable. This is a networking product.",
        dram: "Not specified in the public listing",
        technicalSpecs: [
          "Whole-home mesh coverage",
          "Designed to reduce Wi-Fi dead zones",
          "Best used as a matched kit",
          "Backhaul and port speed depend on exact model"
        ],
        warranty: "Check current seller/manufacturer warranty before purchase.",
        pros: [
          "Better coverage for larger homes",
          "Cleaner roaming than random extenders",
          "Useful when the router is far from rooms that need Wi-Fi"
        ],
        cons: [
          "Costs more than a single router",
          "Performance depends on placement",
          "Exact speed and features vary by model"
        ],
        verdict: "Good option when one router cannot cover the full home reliably.",
        compatibility: "Works with most broadband connections when connected to the main modem or router. Exact setup depends on ISP hardware.",
        technicianNote: "Place mesh nodes in open areas with strong signal between nodes. Avoid hiding them behind TVs or inside cabinets."
      },
      {
        id: "usb-wifi-adapter",
        name: "USB Wi-Fi Adapter",
        image: "assets/Wi-Fi extender.png",
        badge: "Repair pick",
        price: "INR 799",
        use: "Desktop Wi-Fi or weak laptop adapter",
        spec: "Dual-band USB adapter",
        note: "Quick fix when built-in Wi-Fi is unreliable.",
        link: "#",
        controller: "Wi-Fi chipset not specified in the public listing",
        nand: "Not applicable. This is a USB network adapter.",
        dram: "Not applicable. This is a USB network adapter.",
        technicalSpecs: [
          "USB Wi-Fi adapter",
          "Dual-band support depends on exact model",
          "Useful for desktops without built-in Wi-Fi",
          "Driver support should be checked before purchase"
        ],
        warranty: "Check current seller/manufacturer warranty before purchase.",
        pros: [
          "Quick fix for desktop Wi-Fi",
          "Useful if laptop internal Wi-Fi is weak",
          "Easy to replace later"
        ],
        cons: [
          "Small adapters may have limited range",
          "Driver support can vary",
          "Not a substitute for a better router if home coverage is poor"
        ],
        verdict: "Useful repair accessory for adding or restoring Wi-Fi on a computer.",
        compatibility: "Check Windows, macOS, or Linux driver support before buying. USB port quality and placement can affect signal.",
        technicianNote: "Use a short USB extension cable if the desktop is under a table or close to a wall to improve signal reception."
      }
    ]
  },
  // combo: {
  //   label: "Keyboard Combos",
  //   title: "Recommended Keyboard and Mouse Combos",
  //   description: "Comfortable wireless sets for everyday home computer use, office work, study, and browsing.",
  //   products: [
  //     {
  //       name: "Full-Size Wireless Combo",
  //       badge: "Best everyday",
  //       price: "INR 1,199",
  //       use: "Typing, office work, and home browsing",
  //       spec: "2.4 GHz wireless, full-size layout",
  //       note: "Simple and familiar for most users.",
  //       link: "#"
  //     },
  //     {
  //       name: "Compact Keyboard Combo",
  //       badge: "Small desk",
  //       price: "INR 999",
  //       use: "Small tables and laptop stands",
  //       spec: "Compact layout, wireless mouse",
  //       note: "Saves space without adding cables.",
  //       link: "#"
  //     },
  //     {
  //       name: "Silent Keyboard and Mouse",
  //       badge: "Quiet pick",
  //       price: "INR 1,499",
  //       use: "Shared rooms and late-night work",
  //       spec: "Low-noise keys and clicks",
  //       note: "Good for families and shared work areas.",
  //       link: "#"
  //     }
  //   ]
  // },
  // stand: {
  //   label: "Laptop Stands",
  //   title: "Recommended Laptop Stands",
  //   description: "Desk setup picks that improve screen height, airflow, and comfort during longer laptop sessions.",
  //   products: [
  //     {
  //       name: "Adjustable Laptop Stand",
  //       badge: "Best comfort",
  //       price: "INR 1,299",
  //       use: "Work-from-home desk setup",
  //       spec: "Foldable aluminum-style stand",
  //       note: "Pair with keyboard and mouse for better posture.",
  //       link: "#"
  //     },
  //     {
  //       name: "Laptop Cooling Pad",
  //       badge: "Cooling pick",
  //       price: "INR 899",
  //       use: "Warm laptops and long usage",
  //       spec: "Fan-assisted cooling base",
  //       note: "Useful for older or heat-prone laptops.",
  //       link: "#"
  //     },
  //     {
  //       name: "Portable Foldable Stand",
  //       badge: "Travel pick",
  //       price: "INR 599",
  //       use: "Study tables and mobile work",
  //       spec: "Lightweight foldable design",
  //       note: "Easy to carry and store.",
  //       link: "#"
  //     }
  //   ]
  // },
  // headset: {
  //   label: "Headsets",
  //   title: "Recommended Headsets",
  //   description: "Audio picks for calls, online classes, remote support, and clearer voice during meetings.",
  //   products: [
  //     {
  //       name: "USB Headset with Mic",
  //       badge: "Best for PC",
  //       price: "INR 999",
  //       use: "Meetings, classes, and support calls",
  //       spec: "USB plug-and-play",
  //       note: "Simple setup for desktops and laptops.",
  //       link: "#"
  //     },
  //     {
  //       name: "Bluetooth Headset",
  //       badge: "Multi-device",
  //       price: "INR 1,799",
  //       use: "Laptop and phone switching",
  //       spec: "Wireless Bluetooth connection",
  //       note: "Good when you move between devices.",
  //       link: "#"
  //     },
  //     {
  //       name: "Wired 3.5mm Headset",
  //       badge: "Budget pick",
  //       price: "INR 599",
  //       use: "Basic calls and online classes",
  //       spec: "3.5mm audio jack",
  //       note: "Check if your laptop supports a combo jack.",
  //       link: "#"
  //     }
  //   ]
  // }
};

window.productCategories = categories;

const productList = document.querySelector("[data-product-list]");

if (productList) {
const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("category") || "ssd";
const activeKey = categories[requestedCategory] ? requestedCategory : "ssd";
const activeCategory = categories[activeKey];

const pageTitle = document.querySelector("[data-category-title]");
const pageDescription = document.querySelector("[data-category-description]");
const listTitle = document.querySelector("[data-list-title]");
const tabs = document.querySelector("[data-category-tabs]");

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
    <li>
      <span>Price</span>
      <div class="price-section">
        <strong>${product.price}*</strong>
        <small class="price-note">* Prices may vary at the time of purchase.</small>
      </div>
    </li>
      <li><span>Best for</span><strong>${product.use}</strong></li>
      <li><span>Key spec</span><strong>${product.spec}</strong></li>
    </ul>
    <div class="recommended-actions">
      <a class="button button-primary" href="${product.link}" rel="sponsored nofollow">View Product</a>
      <a class="button button-secondary dark-button" href="product-details.html?id=${encodeURIComponent(product.id)}">Read More</a>
    </div>
  `;

  productList.appendChild(card);
});
}
