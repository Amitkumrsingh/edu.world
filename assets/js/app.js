  function togglePanel(panelHeader) {
        var panel = panelHeader.parentNode;
        var content = panel.querySelector('.panel-content');
        content.classList.toggle('open');
    }

    let slideIndex = 0;
    showSlides();

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("slide");

        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "flex";

        setTimeout(() => {
            plusSlide(1);
        }, 200000);
    }

    function toggleDropdown() {
        var dropdown = document.getElementById("dropdownItems");
        dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
    }

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
            openDropdown.style.display = "none";
            }
        }
        }
    }

    function showMenu(num) {
        document.getElementById("menu"+num).style.display = "flex";
    }

    function hideMenu(num) {
        document.getElementById("menu"+num).style.display = "none";
    }


