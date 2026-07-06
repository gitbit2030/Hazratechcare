const detailParams = new URLSearchParams(window.location.search);
const requestedProductId = detailParams.get("id");
const productCategories = window.productCategories || {};
const allProducts = Object.entries(productCategories).flatMap(([categoryKey, category]) =>
  category.products.map((product) => ({
    ...product,
    categoryKey,
    categoryLabel: category.label,
    categoryTitle: category.title
  }))
);

const selectedProduct = allProducts.find((product) => product.id === requestedProductId);
const detailPanel = document.querySelector("[data-product-detail]");
const notFoundPanel = document.querySelector("[data-product-not-found]");

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value || "Not specified";
  }
}

function renderList(selector, items) {
  const list = document.querySelector(selector);
  if (!list) {
    return;
  }

  list.innerHTML = "";
  (items && items.length ? items : ["Not specified"]).forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
}

if (!selectedProduct) {
  if (detailPanel) {
    detailPanel.hidden = true;
  }
  if (notFoundPanel) {
    notFoundPanel.hidden = false;
  }
} else {
  document.title = `HazraTech Care | ${selectedProduct.name}`;

  const image = document.querySelector("[data-detail-image]");
  const productLink = document.querySelector("[data-detail-link]");
  const backLink = document.querySelector("[data-detail-back]");

  if (image) {
    image.src = selectedProduct.image;
    image.alt = selectedProduct.name;
  }

  if (productLink) {
    productLink.href = selectedProduct.link;
  }

  if (backLink) {
    backLink.href = `recommended-products.html?category=${encodeURIComponent(selectedProduct.categoryKey)}`;
  }

  setText("[data-detail-category]", selectedProduct.categoryTitle);
  setText("[data-detail-name]", selectedProduct.name);
  setText("[data-detail-summary]", selectedProduct.note);
  setText("[data-detail-badge]", selectedProduct.badge);
  setText("[data-detail-price]", `${selectedProduct.price}*`);
  setText("[data-detail-use]", selectedProduct.use);
  setText("[data-detail-spec]", selectedProduct.spec);
  const technicalSpecs = selectedProduct.technicalSpecs || [
    `Key spec: ${selectedProduct.spec}`,
    `Controller: ${selectedProduct.controller}`,
    `NAND: ${selectedProduct.nand}`,
    `DRAM: ${selectedProduct.dram}`
  ];
  renderList(
    "[data-detail-technical-specs]",
    technicalSpecs
  );
  setText("[data-detail-warranty]", selectedProduct.warranty);
  setText("[data-detail-compatibility]", selectedProduct.compatibility);
  setText("[data-detail-verdict]", selectedProduct.verdict);
  setText("[data-detail-technician-note]", selectedProduct.technicianNote);
  renderList("[data-detail-pros]", selectedProduct.pros);
  renderList("[data-detail-cons]", selectedProduct.cons);
}
