document.addEventListener("DOMContentLoaded", () => {
  const jobSeekerTab = document.getElementById("jobSeekerTab");
  const companyTab = document.getElementById("companyTab");
  const loginBtn = document.getElementById("loginBtn");
  const formTitle = document.getElementById("formTitle");
  const forgotLink = document.querySelector(".text-left a");
  const registerBtn = document.querySelector(".border");
  const labels = document.querySelectorAll("label");
  const inputs = document.querySelectorAll("input");

  let activeTab = "job";

  if (jobSeekerTab && companyTab) {
    jobSeekerTab.addEventListener("click", () => {
      if (activeTab !== "job") {
        activeTab = "job";
        jobSeekerTab.className =
          "w-1/2 py-3 !bg-white ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-[#5090C7] transition duration-200";
        companyTab.className =
          "w-1/2 py-3 text-center items-center rounded-t-lg inline-flex justify-center !text-gray-600 !bg-gray-400 hover:text-[#5090C7] border-transparent transition duration-200";
        if (formTitle)
          formTitle.className = "text-center text-[#5090C7] text-xl mb-6";
        if (loginBtn)
          loginBtn.className =
            "w-full bg-[#5090C7] hover:bg-[#66A2D3] text-white py-2 text-base rounded transition duration-200";
        if (registerBtn)
          registerBtn.className =
            "w-full border mt-4 border-[#5090C7] text-[#5090C7] text-base py-2 rounded bg-blue-50 transition duration-200";
        if (forgotLink)
          forgotLink.className = "text-sm text-[#5090C7] transition";
        labels.forEach(
          (label) => (label.className = "block text-[#5090C7] mb-1")
        );
        inputs.forEach(
          (input) =>
            (input.className =
              "w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200")
        );
      }
    });

    companyTab.addEventListener("click", () => {
      if (activeTab !== "company") {
        activeTab = "company";
        companyTab.className =
          "w-1/2 py-3 text-center items-center rounded-t-lg inline-flex justify-center mr-6 bg-white text-[#3F4595] transition duration-200";
        jobSeekerTab.className =
          "w-1/2 py-3 inline-flex items-center justify-center text-center rounded-t-lg text-gray-600 bg-gray-400 transition duration-200";
        if (formTitle)
          formTitle.className = "text-center text-[#3F4595] text-xl mb-6";
        if (loginBtn)
          loginBtn.className =
            "w-full bg-[#3F4595] hover:bg-[#4e56c5] text-white py-2 text-base rounded transition duration-200";
        if (registerBtn)
          registerBtn.className =
            "w-full border mt-4 border-[#3F4595] text-[#3F4595] text-base py-2 rounded hover:bg-[#3F459520] transition duration-200";
        if (forgotLink)
          forgotLink.className = "text-sm text-[#3F4595] transition";
        labels.forEach(
          (label) => (label.className = "block text-[#3F4595] mb-1")
        );
        inputs.forEach(
          (input) =>
            (input.className =
              "w-full border border-[#3F459580] rounded px-3 py-2 focus:outline-none focus:ring focus:ring-[#3F459520]")
        );
      }
    });

    if (window.location.hash === "#companyTab") {
      companyTab.click();
    } else {
      jobSeekerTab.click();
    }
  }

const slides = [
  {
    image: "assets/ipad.png",
    title: "وظف أفضل الكفاءات السعودية بسهولة",
    paragraph1:
      "انضم إلى 'ذات' وابدأ بتوظيف نخبة المواهب المحلية بمرونة وسهولة.",
    paragraph2:
      "أنشئ حساب شركتك مجانًا، وانشر شواغرك خلال دقائق، وابدأ استقبال طلبات المرشحين فورًا.",
    buttonText: "سجل شركتك الآن مجانًا",
    buttonLink: "Register.html#companyTabRegister",
    buttonColor: "#3f4595", // لون زر السلايد الأول
  },
  {
    image: "assets/ipad2.png",
    title: "أوجد وظيفتك المثالية بسهولة",
    paragraph1:
      "انضم إلى 'ذات' وانطلق نحو مستقبلك المهني مع أفضل الشركات في السعودية بمرونة وسهولة.",
    paragraph2:
      "أنشئ ملفك الشخصي مجانًا، تصفح أحدث الشواغر خلال دقائق، وتقدم على الوظيفة المناسبة لك فورًا.",
    buttonText: "سجل واستقبل الوظائف",
    buttonLink: "Register.html#jobSeekerTab",
    buttonColor: "#5090C7", // لون زر السلايد الثاني
  },
];

const slider = document.getElementById("slider");
const title = document.querySelector(".hero-section h1");
const p1 = document.querySelectorAll(".hero-section p")[0];
const p2 = document.querySelectorAll(".hero-section p")[1];
const button = document.querySelector(".hero-section a button");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");

if (slider && dot1 && dot2) {
  let current = 0;

  function lightenColor(color, percent) {
    let num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      G = ((num >> 8) & 0x00ff) + amt,
      B = (num & 0x0000ff) + amt;
    return (
      "#" +
      (
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  function updateSlider() {
    const slide = slides[current];

    // إعادة تشغيل أنيميشن الصورة
    slider.classList.remove("fade");
    void slider.offsetWidth;
    slider.classList.add("fade");

    // إعادة تشغيل أنيميشن النصوص والزر
    [title, p1, p2, button].forEach((el) => {
      el.classList.remove("fade2");
      void el.offsetWidth;
      el.classList.add("fade2");
    });

    // تغيير الصورة والنصوص
    slider.src = slide.image;
    title.innerHTML = slide.title;
    p1.textContent = slide.paragraph1;
    p2.textContent = slide.paragraph2;

    // الزر
    button.textContent = slide.buttonText;
    button.parentElement.href = slide.buttonLink;
    button.style.backgroundColor = slide.buttonColor;
    button.style.transition = "background-color 0.3s ease";

    // إعداد الهوفر
    const hoverColor = lightenColor(slide.buttonColor, 15);
    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = hoverColor;
    });
    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = slide.buttonColor;
    });

    // التحكم في النقاط
    if (current === 0) {
      dot1.classList.add("bg-white");
      dot1.classList.remove("bg-white/40");
      dot2.classList.add("bg-white/40");
      dot2.classList.remove("bg-white");
    } else {
      dot2.classList.add("bg-white");
      dot2.classList.remove("bg-white/40");
      dot1.classList.add("bg-white/40");
      dot1.classList.remove("bg-white");
    }
  }

  // تقليب تلقائي
  setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlider();
  }, 5000);

  // التحكم بالنقر على النقاط
  dot1.addEventListener("click", () => {
    current = 0;
    updateSlider();
  });
  dot2.addEventListener("click", () => {
    current = 1;
    updateSlider();
  });

  // البداية
  updateSlider();
}


  document.querySelectorAll('a[href="#companyTab"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const companyBtn = document.getElementById("companyTab");
      if (companyBtn) companyBtn.click();
    });
  });
});
window.addEventListener("load", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 40,
    loop: true,
    speed: 5000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,
    grabCursor: false,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 20 },
      640: { slidesPerView: 3, spaceBetween: 25 },
      1024: { slidesPerView: 5, spaceBetween: 40 },
    },
  });
});
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (
    !mobileMenu.classList.contains("hidden") &&
    !mobileMenu.contains(e.target) &&
    e.target !== menuBtn
  ) {
    mobileMenu.classList.add("hidden");
  }
});

const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const counter = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(counter);
    }
    element.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

const section = document.querySelector(".stats-section");
const counters = section.querySelectorAll("h3");
let started = false;

window.addEventListener("scroll", () => {
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (!started && sectionTop < windowHeight - 100) {
    started = true;

    counters.forEach((counter) => {
      const target = parseInt(counter.textContent.replace(/,/g, ""));
      counter.textContent = "0";
      animateCounter(counter, target);
    });
  }
});
const fadeElements = document.querySelectorAll(".fade-slide-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));
