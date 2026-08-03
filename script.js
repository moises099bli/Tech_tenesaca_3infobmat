// Cambiar estado activo en el menú según scroll
window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section, footer');
    let navLinks = document.querySelectorAll('.nav-item');
    
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                if(id) {
                    let activeLink = document.querySelector('.main-menu ul li a[href*=' + id + ']');
                    if(activeLink) activeLink.classList.add('active');
                }
            });
        }
    });
    
    // Cambiar opacidad del fondo del navbar al hacer scroll
    let header = document.querySelector('.header-navbar');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(3, 7, 18, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(3, 7, 18, 0.75)';
    }
});

// Efecto spotlight en las tarjetas de productos: al pulsar una, resalta y atenúa las demás
const plansGrid = document.querySelector('.plans-grid');
if (plansGrid) {
    const planCards = plansGrid.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('click', () => {
            const alreadyActive = card.classList.contains('is-active');
            planCards.forEach(c => c.classList.remove('is-active'));
            if (alreadyActive) {
                plansGrid.classList.remove('has-active');
            } else {
                card.classList.add('is-active');
                plansGrid.classList.add('has-active');
            }
        });
    });
}

// Búsqueda de equipos en el navbar (placeholder sin backend)
const navSearch = document.querySelector('.nav-search');
if (navSearch) {
    navSearch.addEventListener('submit', (e) => {
        e.preventDefault();
        const term = navSearch.querySelector('.nav-search-input').value;
        console.log('Buscando equipo:', term);
    });
}

// Interacción básica para el botón de idiomas
const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const text = langBtn.querySelector('.lang-text');
        text.innerText = text.innerText === 'EN' ? 'ES' : 'EN';
    });
}

// Formulario de Novedades
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por registrarte para recibir novedades!');
        newsletterForm.reset();
    });
}

// Formulario de Contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.');
        contactForm.reset();
    });
}