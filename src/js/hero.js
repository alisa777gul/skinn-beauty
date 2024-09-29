document.getElementById('hero').addEventListener('click', (e) => {
    e.preventDefault(); 

    const targetId = document.getElementById('hero').getAttribute('href'); 
    const targetElement = document.querySelector(targetId); 

    if (targetElement) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const itemHeight = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight; 

        window.scrollTo({
            top: itemHeight,
            behavior: 'smooth' 
        });
    }
});