      const slides = ["assets/ipad.png", "assets/ipad2.png"];
      const slider = document.getElementById("slider");
      const dot1 = document.getElementById("dot1");
      const dot2 = document.getElementById("dot2");

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

      // التبديل التلقائي

      // التبديل اليدوي
      dot1.addEventListener("click", () => {
        current = 0;
        updateSlider();
      });
      dot2.addEventListener("click", () => {
        current = 1;
        updateSlider();
      });

      updateSlider();
