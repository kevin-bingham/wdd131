document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('nav ul');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const updateImages = () => {
        const images = document.querySelectorAll('.responsive-img');
        const screenWidth = window.innerWidth;

        images.forEach(image => {
            if (screenWidth >= 1000) {
                image.src = 'norris-full.jpeg';
            } else {
                image.src = 'norris-sm.jpeg';
            }
        });
    };

    const updateMenu = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 1000) {
            navLinks.style.display = 'flex';
            menuButton.style.display = 'none';
            navLinks.style.flexDirection = 'row';
            navLinks.style.justifyContent = 'space-around';
        } else {
            navLinks.style.display = 'none';
            menuButton.style.display = 'block';
        }
    };

    updateImages();
    updateMenu();
    window.addEventListener('resize', () => {
        updateImages();
        updateMenu();
    });
});
