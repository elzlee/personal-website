
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('homepage-container').style.display = 'block';
    }, 3000); // 3000ms = 3 seconds
});

document.addEventListener('DOMContentLoaded', function() {
    var typed_title = new Typed('#greeting-title', {
        strings: ['Elizabeth Lee.'],
        typeSpeed: 50,
        showCursor: false,  // Show cursor during typing 
    });
});

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        // When the tab is no longer visible
        document.title = "Hey, come back!";
    } else {
        // When the tab is active again
        document.title = "Elizabeth Lee | Product Manager";
    }
});


    
