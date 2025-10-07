 // Dynamic nav items
    const navItems = [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ];

    const navLinks = document.getElementById("nav-links");
    const mobileLinks = document.getElementById("mobile-links");

    navItems.forEach(item => {
      const desktopLink = document.createElement("li");
      desktopLink.innerHTML = `<a href="${item.href}" class="nav-link text-indigo-600 hover:text-indigo-400 transition-colors duration-300">${item.name}</a>`;
      navLinks.appendChild(desktopLink);

      const mobileLink = document.createElement("li");
      mobileLink.innerHTML = `<a href="${item.href}" class="text-indigo-600 hover:text-indigo-500 transition-colors duration-300">${item.name}</a>`;
      mobileLinks.appendChild(mobileLink);
    });

    // Elements
    const menuBtn = document.getElementById("menu-btn");
    const lines = menuBtn.querySelectorAll(".line");
    const mobileMenu = document.getElementById("mobile-menu");
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navAnchors = document.querySelectorAll(".nav-link");
    let menuOpen = false;

    // Hamburger animation + GSAP menu
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        // Animate hamburger → X
        gsap.to(lines[0], { rotate: 45, y: 7, duration: 0.3 });
        gsap.to(lines[1], { opacity: 0, duration: 0.2 });
        gsap.to(lines[2], { rotate: -45, y: -7, duration: 0.3 });

        // Open mobile menu
        mobileMenu.classList.remove("hidden");
        gsap.fromTo(mobileMenu, { y: "-100%" }, { y: 0, duration: 0.6, ease: "power4.out" });
        gsap.from("#mobile-menu ul li", {
          opacity: 0,
          y: 30,
          duration: 0.5,
          delay: 0.3,
          stagger: 0.2
        });
        menuOpen = true;
      } else {
        // Animate X → hamburger
        gsap.to(lines[0], { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(lines[1], { opacity: 1, duration: 0.3, delay: 0.1 });
        gsap.to(lines[2], { rotate: 0, y: 0, duration: 0.3 });

        // Close menu
        gsap.to(mobileMenu, {
          y: "-100%",
          duration: 0.6,
          ease: "power4.in",
          onComplete: () => mobileMenu.classList.add("hidden")
        });
        menuOpen = false;
      }
    });

    // Close mobile menu when a link is clicked
    mobileLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        menuBtn.click(); // triggers close animation
      }
    });

    // Navbar color change on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("bg-gray-900/95", "shadow-lg");
      } else {
        navbar.classList.remove("bg-gray-900/95", "shadow-lg");
      }
    });

    // Active link highlight while scrolling
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });

      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("text-indigo-400");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("text-indigo-400");
        }
      });
    });