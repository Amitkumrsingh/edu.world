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
        }, 200000); // Adjust this delay as needed
    }


