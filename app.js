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
const desktopMenuProduct = document.getElementById("desktop-menu-product");
const desktopMenuCompany = document.getElementById("desktop-menu-company");
const desktopMenuConnect = document.getElementById("desktop-menu-connect");
const desktopMenuProductIcon = document.getElementById("desktop-menu-product-icon");
const desktopMenuCompanyIcon = document.getElementById("desktop-menu-company-icon");
const desktopMenuConnectIcon = document.getElementById("desktop-menu-connect-icon");
const desktopMenuProductSubmenu = document.getElementById(
  "desktop-menu-product-submenu",
);
const desktopMenuCompanySubmenu = document.getElementById(
  "desktop-menu-company-submenu",
);
const desktopMenuConnectSubmenu = document.getElementById(
  "desktop-menu-connect-submenu",
);


const mobileMenuToggleButtons = document.querySelectorAll('.mobile-menu__toggle');

function openMobileMenu() {
  headerToggle.src = "./images/icon-close.svg";
  mobileMenu.classList.remove("hidden");
}

function openDesktopSubmenu() {
  desktopMenuProductSubmenu.classList.remove("hidden");
  desktopMenuProductIcon.classList.add("rotate");
} 

function openDesktopCompanySubmenu() {
  desktopMenuCompanySubmenu.classList.remove("hidden");
  desktopMenuCompanyIcon.classList.add("rotate");
}

function openDesktopConnectSubmenu() {
  desktopMenuConnectSubmenu.classList.remove("hidden");
  desktopMenuConnectIcon.classList.add("rotate");
}

function closeDesktopSubmenus(){
  desktopMenuProductSubmenu.classList.add("hidden");
  desktopMenuCompanySubmenu.classList.add("hidden");
  desktopMenuConnectSubmenu.classList.add("hidden");
  desktopMenuProductIcon.classList.remove("rotate");
  desktopMenuCompanyIcon.classList.remove("rotate");
  desktopMenuConnectIcon.classList.remove("rotate");
}

desktopMenuProduct.addEventListener("click", () => {
  if (desktopMenuProductSubmenu.classList.contains("hidden")) {
    closeDesktopSubmenus();
    openDesktopSubmenu();
  } else {
    closeDesktopSubmenus();
  }
});

desktopMenuCompany.addEventListener("click", () => {
  if (desktopMenuCompanySubmenu.classList.contains("hidden")) {
    closeDesktopSubmenus();
    openDesktopCompanySubmenu();  
  } else {
    closeDesktopSubmenus();
  }
});

desktopMenuConnect.addEventListener("click", () => {
  if (desktopMenuConnectSubmenu.classList.contains("hidden")) {
    closeDesktopSubmenus();
    openDesktopConnectSubmenu();
  } else {
    closeDesktopSubmenus();
  }
});


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
  Array.from(mobileMenuToggleButtons).forEach(button =>{
    button.classList.remove('button-color');
  })
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

mobileMenuProduct.addEventListener("click", (e) => {
  let menuProduct = e.target.closest('button');
  if (mobileMenuProductSubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileProductSubmenu();
    menuProduct.classList.add('button-color');
  } else {
    closeSubmenus();
  }
});

mobileMenuCompany.addEventListener("click", (e) => {
  let menuProduct = e.target.closest('button');
  if (mobileMenuCompanySubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileCompanySubmenu();
    menuProduct.classList.add('button-color');
  } else {
    closeSubmenus();
  }
});

mobileMenuConnect.addEventListener("click", (e) => {
  let menuProduct = e.target.closest('button');
  if (mobileMenuConnectSubmenu.classList.contains("hidden")) {
    closeSubmenus();
    openMobileConnectSubmenu();
    menuProduct.classList.add('button-color');
  } else {
    closeSubmenus();
  }
});

document.addEventListener("click", (e) => {
  if (!headerToggle.contains(e.target) && 
      !mobileMenu.contains(e.target) &&
      !desktopMenuProduct.contains(e.target) &&
      !desktopMenuCompany.contains(e.target) &&
      !desktopMenuConnect.contains(e.target)) 
      {
    closeMobileMenu();
    closeDesktopSubmenus();
  }
});