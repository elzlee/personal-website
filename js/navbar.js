let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    console.log("loading...")
    var st = window.scrollY || document.documentElement.scrollTop;
    console.log("Scroll position:", st);  // Debug log
    if (st > lastScrollTop){
        console.log("Hiding Navbar");
        // Downscroll code
        document.getElementById('navbar').style.top = "-120px";
    } else {
        // Upscroll code
        console.log("Showing Navbar");
        document.getElementById('navbar').style.top = "30px";
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);



function loadNavbar() {
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    fetch('navbar.html')  // Path to your navbar.html file
        .then(response => response.text())
        .then(html => {
            navbarPlaceholder.innerHTML = html;
        })
        .catch(error => {
            console.error('Failed to load the navbar:', error);
        });
}
