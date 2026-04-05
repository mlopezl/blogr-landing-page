# Frontend Mentor - Blogr Landing Page Solution

This is my solution to the **Blogr Landing Page** challenge on Frontend Mentor. This project focuses on building a fully responsive landing page with interactive dropdown navigation menus for both mobile and desktop using HTML, CSS, and vanilla JavaScript.

The challenge was a great opportunity to practice semantic HTML structure, modern CSS architecture, responsive design techniques, and DOM manipulation without relying on frameworks or external libraries.

---

## Table of contents
- [Overview](#overview)
- [The challenge](#the-challenge)
- [Design](#design)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

---

## Overview
This project is a responsive landing page for a modern publishing platform called **Blogr**, featuring an interactive navigation system with dropdown menus for both mobile and desktop layouts.

The interface includes a mobile navigation menu, dropdown submenus, dynamic icon toggling, and responsive layout adjustments across different screen sizes using a mobile-first approach.

All layout styling is handled with modern CSS techniques, while the interactive navigation behavior is implemented using vanilla JavaScript through DOM manipulation and event listeners.

---

## The challenge
Users should be able to:

- View the optimal layout depending on their device’s screen size.
- Experience a mobile-first responsive design.
- Open and close the mobile navigation menu.
- Toggle dropdown submenus in both mobile and desktop navigation.
- See arrow icons rotate depending on the submenu state.
- Close menus when clicking outside of them.
- Experience hover and focus states for interactive elements.
- View smooth transitions between UI states.

---

## Design

- Desktop Design  

<img src="./design/desktop-design.jpg" alt="Desktop preview" width="600">

- Active States  

<img src="./design/active-states.jpg" alt="Active states" width="600">

- Mobile Design  

<img src="./design/mobile-design.jpg" alt="Mobile preview" width="200">

- Mobile Menu 

<img src="./design/mobile-menu.jpg" alt="Mobile meny" width="200">

---

## Links
- Solution URL: [GitHub Repository](https://github.com/mlopezl/blogr-landing-page)
- Live Site URL: [Live Demo](https://mlopezl.github.io/blogr-landing-page/)

---

## My process
- Structured the layout using **semantic HTML5** elements such as `header`, `nav`, `main`, `section`, and `footer`.
- Followed a **mobile-first approach**, progressively enhancing the layout using media queries.
- Built layouts primarily using **Flexbox** for alignment, spacing, and responsive structure.
- Used **CSS custom properties (variables)** to create a consistent and reusable color system.
- Applied the **BEM naming convention** to maintain modular, scalable, and readable CSS.
- Implemented dropdown navigation menus for both mobile and desktop interfaces.
- Created a mobile navigation panel that toggles visibility using JavaScript.
- Used **JavaScript DOM manipulation** to dynamically control menu states.
- Managed UI states by adding and removing CSS classes such as `hidden` and `rotate`.
- Implemented icon rotation to reflect submenu open/close states.
- Added a global click listener to detect clicks outside navigation elements and close open menus.
- Maintained clear separation between structure (HTML), styling (CSS), and behavior (JavaScript).

---

## Built with
- HTML5
- CSS3
- JavaScript (ES6)
- Flexbox
- CSS custom properties (variables)
- Mobile-first workflow
- Responsive design principles
- BEM naming methodology
- DOM manipulation
- Event listeners
- Media queries

---

## What I learned
- Structuring responsive layouts using **semantic HTML**.
- Building flexible and adaptive layouts with **Flexbox**.
- Organizing scalable styles using the **BEM methodology**.
- Creating reusable design tokens using **CSS variables**.
- Implementing interactive dropdown navigation systems with **vanilla JavaScript**.
- Managing UI state by dynamically adding and removing classes.
- Handling both mobile and desktop navigation logic separately.
- Detecting clicks outside elements to improve user experience.
- Implementing responsive behavior using **media queries** and layout restructuring.
- Writing clean, maintainable, and modular frontend code without frameworks.