const headerToggle = document.querySelector(".header__toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuProduct = document.getElementById("mobile-menu-product");
const mobileMenuCompany = document.getElementById("mobile-menu-company");
const mobileMenuConnect = document.getElementById("mobile-menu-connect");
const mobileMenuProductSubmenu = document.getElementById(
  "mobile-menu-product-submenu",
);
const mobileMenuCompanySubmenu = document.getElementById(
  "mobile-menu-company-submenu",
);
const mobileMenuConnectSubmenu = document.getElementById(
  "mobile-menu-connect-submenu",
);
const mobileMenuProductIcon = document.getElementById(
  "mobile-menu-product-icon",
);
const mobileMenuCompanyIcon = document.getElementById(
  "mobile-menu-company-icon",
);
const mobileMenuConnectIcon = document.getElementById(
  "mobile-menu-connect-icon",
);

function openMobileMenu() {
  headerToggle.src = "./images/icon-close.svg";
  mobileMenu.classList.remove("hidden");
}

function closeMobileMenu() {
  headerToggle.src = "./images/icon-hamburger.svg";
  mobileMenu.classList.add("hidden");
  closeSubmenus();
}

function closeSubmenus() {
  mobileMenuProductSubmenu.classList.add("hidden");
  mobileMenuCompanySubmenu.classList.add("hidden");
  mobileMenuConnectSubmenu.classList.add("hidden");
  mobileMenuProductIcon.classList.remove("rotate");
  mobileMenuCompanyIcon.classList.remove("rotate");
  mobileMenuConnectIcon.classList.remove("rotate");
}

function openMobileProductSubmenu() {
  mobileMenuProductSubmenu.classList.remove("hidden");
  mobileMenuProductIcon.classList.add("rotate");
}

function openMobileCompanySubmenu() {
  mobileMenuCompanySubmenu.classList.remove("hidden");
  mobileMenuCompanyIcon.classList.add("rotate");
}

function openMobileConnectSubmenu() {
  mobileMenuConnectSubmenu.classList.remove("hidden");
  mobileMenuConnectIcon.classList.add("rotate");
}

headerToggle.addEventListener("click", () => {
  if (headerToggle.src.includes("icon-hamburger.svg")) {
    openMobileMenu();
  } else {
    closeMobileMenu();
  }
});

mobileMenuProduct.addEventListener("click", () => {
  if (mobileMenuProductSubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileProductSubmenu();
  } else {
    closeSubmenus();
  }
});

mobileMenuCompany.addEventListener("click", () => {
  if (mobileMenuCompanySubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileCompanySubmenu();
  } else {
    closeSubmenus();
  }
});

mobileMenuConnect.addEventListener("click", () => {
  if (mobileMenuConnectSubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileConnectSubmenu();
  } else {
    closeSubmenus();
  }
});

document.addEventListener("click", (e) => {
  if (!headerToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});
