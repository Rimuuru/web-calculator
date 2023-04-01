const btnToggle = document.querySelector(".btn-toggle");
      const lightBg = document.querySelector(".light_bg");
      btnToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (lightBg.src.match("images/light.png")) {
          lightBg.src = "images/dark.png";
        } else {
          lightBg.src = "images/light.png";
        }
        btnToggle.classList.toggle("active");
      });