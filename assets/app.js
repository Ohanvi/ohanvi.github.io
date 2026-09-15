const menuButton = document.querySelector("[data-menu-toggle]");
const sidebar = document.querySelector("[data-sidebar]");
const searchInput = document.querySelector("[data-search]");
const searchableItems = [...document.querySelectorAll("[data-search-item]")];

if (menuButton && sidebar) {
  menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("is-open");
  });
}

if (searchInput && searchableItems.length) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();

    searchableItems.forEach((item) => {
      const matches = item.textContent.toLowerCase().includes(query);
      item.classList.toggle("hidden", query.length > 0 && !matches);
    });
  });
}
