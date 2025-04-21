import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup({debugMode: true});

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('tile-card-show');
        }
        else
        {
            entry.target.classList.remove('tile-card-show');
        }
    });
});

function observer_refresh()
{
    if(observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting)
            {
                entry.target.classList.add('tile-card-show');
            }
            else
            {
                entry.target.classList.remove('tile-card-show');
            }
        });
    });

}

// In app.js
function initializeObservers() {
    // Check if the page is the specific page you want
    if (window.location.pathname.endsWith('/team')) {
        console.log("AwsomeSauce");
        observer_refresh(); // Call the function only if we're on the specific page
    }

    const hiddenElements = document.querySelectorAll('.tile-card');
    hiddenElements.forEach((el) => observer.observe(el));
}

// Initialize observers on initial page load
document.addEventListener('DOMContentLoaded', initializeObservers);

// Reinitialize observers after Swup replaces content
swup.hooks.on('page:view', initializeObservers);
  

const hiddenElements = document.querySelectorAll('.tile-card');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.header-button');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');
    const navbarToggler = document.querySelector('.navbar-toggler');

    document.addEventListener('click', function(e) {
        const button = e.target.closest('.header-button');
        const clickedInsideNavbar = e.target.closest('#navbarSupportedContent');
        const clickedToggler = e.target.closest('.navbar-toggler');

        // If a header button was clicked
        if (button) {
            //e.preventDefault();

            // Update active button
            buttons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            // Collapse navbar if open
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        } 
        // If click was outside header buttons AND navbar content AND not on toggler
        else if (
            navbarCollapse.classList.contains('show') &&
            !clickedInsideNavbar &&
            !clickedToggler
        ) {
            navbarToggler.click(); // collapse the navbar
        }
    });
});
