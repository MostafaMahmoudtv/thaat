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

  // 🔵 تبويب الباحثين عن عمل
  if (jobSeekerTab && companyTab) {
    jobSeekerTab.addEventListener("click", () => {
      if (activeTab !== "job") {
        activeTab = "job";
        jobSeekerTab.className =
          "w-1/2 py-3 !bg-white ml-6 inline-flex items-center justify-center text-center rounded-t-lg text-blue-600 transition duration-200";
        companyTab.className =
          "w-1/2 py-3 text-center items-center rounded-t-lg inline-flex justify-center !text-gray-600 !bg-gray-400 hover:text-blue-600 border-transparent transition duration-200";
        if (formTitle)
          formTitle.className = "text-center text-blue-600 text-xl mb-6";
        if (loginBtn)
          loginBtn.className =
            "w-full bg-blue-500 hover:bg-blue-600 text-white py-2 text-base rounded transition duration-200";
        if (registerBtn)
          registerBtn.className =
            "w-full border mt-4 border-blue-400 text-blue-600 text-base py-2 rounded bg-blue-50 transition duration-200";
        if (forgotLink)
          forgotLink.className = "text-sm text-blue-600 transition";
        labels.forEach(
          (label) => (label.className = "block text-blue-600 mb-1")
        );
        inputs.forEach(
          (input) =>
            (input.className =
              "w-full border border-blue-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200")
        );
      }
    });

    // 🟣 تبويب الشركات
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

    // ✅ تشغيل التبويب المناسب حسب الـhash في الرابط
    if (window.location.hash === "#companyTab") {
      companyTab.click();
    } else {
      jobSeekerTab.click();
    }
  }

  // ✅ السلايدر
  const slides = ["assets/ipad.png", "assets/ipad2.png"];
  const slider = document.getElementById("slider");
  const dot1 = document.getElementById("dot1");
  const dot2 = document.getElementById("dot2");

  if (slider && dot1 && dot2) {
    let current = 0;

    function updateSlider() {
      slider.src = slides[current];
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

    // ⏱️ تبديل تلقائي كل 5 ثواني
    setInterval(() => {
      current = (current + 1) % slides.length;
      updateSlider();
    }, 5000);

    // تبديل يدوي
    dot1.addEventListener("click", () => {
      current = 0;
      updateSlider();
    });
    dot2.addEventListener("click", () => {
      current = 1;
      updateSlider();
    });

    updateSlider();
  }

  // 📎 الضغط على زر الشركات داخل الصفحة نفسها
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
    speed: 5000, // سرعة الحركة
    autoplay: {
      delay: 0, // بدون توقف بين الحركات
      disableOnInteraction: false,
    },
    freeMode: true, // حركة انسيابية
    freeModeMomentum: false,
    allowTouchMove: false, // يمنع السحب بالماوس
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

  // فتح وغلق المينيو عند الضغط على الزر
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // يمنع قفلها فور الضغط
    mobileMenu.classList.toggle("hidden");
  });

  // غلق المينيو عند الضغط خارجها
  document.addEventListener("click", (e) => {
    if (
      !mobileMenu.classList.contains("hidden") && // لو مفتوحة
      !mobileMenu.contains(e.target) && // والضغط مش داخلها
      e.target !== menuBtn // ولا على الزر نفسه
    ) {
      mobileMenu.classList.add("hidden");
    }
  });

  // غلق المينيو لما تضغط على أي لينك داخلها
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

  // تحديد السيكشن بكلاس stats-section
  const section = document.querySelector(".stats-section");
  const counters = section.querySelectorAll("h3");
  let started = false;

  window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // يبدأ العد أول ما السكشن يظهر في الشاشة
    if (!started && sectionTop < windowHeight - 100) {
      started = true;

      counters.forEach((counter) => {
        const target = parseInt(counter.textContent.replace(/,/g, ""));
        counter.textContent = "0";
        animateCounter(counter, target);
      });
    }
  });
    const fadeElements = document.querySelectorAll('.fade-slide-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // عشان ما يعيد الأنيميشن كل مرة
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 } // يعني يبدأ لما 20% من العنصر تكون ظاهرة
  );

  fadeElements.forEach((el) => observer.observe(el));