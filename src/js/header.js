const productLinks = document.querySelectorAll('.link');

productLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        const targetId = link.getAttribute('href'); 
        const targetElement = document.querySelector(targetId); 

        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight; 
            const itemHeight = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight; // Height of the element taking header into account

            window.scrollTo({
                top: itemHeight,
                behavior: 'smooth' 
            });
        }
    });
});