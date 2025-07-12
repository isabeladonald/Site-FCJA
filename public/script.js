document.addEventListener('DOMContentLoaded', function() {
    const menuToggler = document.getElementById('menu-toggler');
    const menuLinks = document.getElementById('menu-links');

    if (menuToggler && menuLinks) {
        // Lógica para abrir e fechar o menu principal no mobile
        menuToggler.addEventListener('click', function() {
            menuToggler.classList.toggle('active');
            menuLinks.classList.toggle('active');
            
            const isExpanded = menuToggler.classList.contains('active');
            menuToggler.setAttribute('aria-expanded', isExpanded);
        });

        // Lógica para lidar com os dropdowns em telas mobile
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            toggle.addEventListener('click', function(event) {
                // Em telas menores que 992px, impede o link de navegar e abre o submenu
                if (window.innerWidth < 992) {
                    event.preventDefault();
                    dropdown.classList.toggle('open');
                }
            });
        });
    }

    console.log("Novo menu carregado e pronto!");
});