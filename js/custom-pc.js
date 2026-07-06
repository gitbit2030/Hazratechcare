const WHATSAPP_NUMBER = "919242281562";

const pcConfiguratorData = {
  buildTypes: [
    "Office PC",
    "Student PC",
    "Gaming PC",
    "Video Editing PC"
  ],
  budgets: [
    "Under \u20B930,000",
    "\u20B930,000\u2013\u20B950,000",
    "\u20B950,000\u2013\u20B975,000",
    "\u20B975,000\u2013\u20B91,00,000",
    "Above \u20B91,00,000"
  ],
  components: {
    processor: {
      label: "Processor",
      options: [
        "Intel Core i3 / AMD Ryzen 3",
        "Intel Core i5 / AMD Ryzen 5",
        "Intel Core i7 / AMD Ryzen 7",
        "Intel Core i9 / AMD Ryzen 9"
      ]
    },
    motherboard: {
      label: "Motherboard",
      options: [
        "Entry-level motherboard",
        "Wi-Fi motherboard",
        "Gaming motherboard",
        "Creator motherboard"
      ]
    },
    ram: {
      label: "RAM",
      options: [
        "8GB DDR4",
        "16GB DDR4",
        "16GB DDR5",
        "32GB DDR5"
      ]
    },
    storage: {
      label: "Storage",
      options: [
        "500GB NVMe SSD",
        "1TB NVMe SSD",
        "1TB SSD + 1TB HDD",
        "2TB NVMe SSD"
      ]
    },
    graphicsCard: {
      label: "Graphics Card",
      options: [
        "Integrated graphics",
        "Entry-level graphics card",
        "Mid-range gaming graphics card",
        "Creator / high-performance graphics card"
      ]
    },
    powerSupply: {
      label: "Power Supply",
      options: [
        "450W 80+",
        "550W 80+ Bronze",
        "650W 80+ Bronze",
        "750W 80+ Gold"
      ]
    },
    cabinet: {
      label: "Cabinet",
      options: [
        "Standard office cabinet",
        "Compact cabinet",
        "Gaming RGB cabinet",
        "Airflow cabinet"
      ]
    },
    operatingSystem: {
      label: "Operating System",
      options: [
        "Windows 11 Home",
        "Windows 11 Pro",
        "Linux",
        "No OS required"
      ]
    }
  }
};

const configForm = document.querySelector("[data-custom-pc-form]");
const componentSelects = Array.from(document.querySelectorAll("[data-config-select]"));
const previewBuildType = document.querySelector("[data-preview-build-type]");
const previewBudget = document.querySelector("[data-preview-budget]");
const previewComponents = document.querySelector("[data-preview-components]");
const resetButton = document.querySelector("[data-reset-config]");

function populateSelect(select, options) {
  select.innerHTML = "";

  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

function populateDropdowns() {
  componentSelects.forEach((select) => {
    const key = select.dataset.configSelect;

    if (key === "buildType") {
      populateSelect(select, pcConfiguratorData.buildTypes);
      return;
    }

    if (key === "budget") {
      populateSelect(select, pcConfiguratorData.budgets);
      return;
    }

    if (pcConfiguratorData.components[key]) {
      populateSelect(select, pcConfiguratorData.components[key].options);
    }
  });
}

function getConfig() {
  return componentSelects.reduce((config, select) => {
    config[select.dataset.configSelect] = select.value;
    return config;
  }, {});
}

function renderPreviewList(config) {
  previewComponents.innerHTML = "";

  Object.entries(pcConfiguratorData.components).forEach(([key, component]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    term.textContent = component.label;
    description.textContent = config[key];
    row.append(term, description);
    previewComponents.appendChild(row);
  });
}

function updatePreview() {
  const config = getConfig();

  previewBuildType.textContent = config.buildType;
  previewBudget.textContent = `Budget: ${config.budget}`;
  renderPreviewList(config);
}

function resetConfiguration() {
  componentSelects.forEach((select) => {
    select.selectedIndex = 0;
  });
  updatePreview();
}

function getCustomerData() {
  const formData = new FormData(configForm);

  return {
    customerName: String(formData.get("customerName") || "").trim(),
    mobile: String(formData.get("mobile") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    additionalRequirements: String(formData.get("additionalRequirements") || "").trim()
  };
}

function buildWhatsAppMessage() {
  const config = getConfig();
  const customer = getCustomerData();

  return `Hello HazraTech Care,

I would like a quotation for the following custom PC.

Customer Name:
${customer.customerName}

Mobile:
${customer.mobile}

Email:
${customer.email}

Build Type:
${config.buildType}

Budget:
${config.budget}

Processor:
${config.processor}

Motherboard:
${config.motherboard}

RAM:
${config.ram}

Storage:
${config.storage}

Graphics Card:
${config.graphicsCard}

Power Supply:
${config.powerSupply}

Cabinet:
${config.cabinet}

Operating System:
${config.operatingSystem}

Additional Requirements:
${customer.additionalRequirements}

Please send me the best quotation along with component availability.

Thank you.`;
}

function handleEstimateRequest(event) {
  event.preventDefault();

  if (!configForm.reportValidity()) {
    return;
  }

  const encodedMessage = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
}

if (configForm) {
  populateDropdowns();
  updatePreview();

  componentSelects.forEach((select) => {
    select.addEventListener("change", updatePreview);
  });

  resetButton.addEventListener("click", resetConfiguration);
  configForm.addEventListener("submit", handleEstimateRequest);
}
