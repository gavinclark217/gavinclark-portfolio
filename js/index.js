document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < 3; i++) {
        const element = document.getElementById('img' + i);
        console.log(element);

        // Define the options for the Intersection Observer
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        // Create a new Intersection Observer
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach(entry => {
                // If element is in viewport, add the 'show' class to trigger the animation
                if (entry.isIntersecting) {
                    element.classList.add('show');
                }
                else {
                    element.classList.remove('show');
                }
            });
        }, options);

        // Start observing the element
        observer.observe(element);
    }

});

