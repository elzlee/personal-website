document.addEventListener('DOMContentLoaded', function () {
    const stack = document.getElementById('photo-stack');
    const images = stack.getElementsByTagName('img');

    Array.from(images).forEach((img, index) => {
        // Allow dragging and then hide on dragend
       
        img.draggable = true;
        img.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', null); // Needed for Firefox
        });

        img.addEventListener('dragend', () => {
            // Move the dragged image to the back of the stack
            stack.appendChild(img);
            console.log(img)
            // Reset transform for all images to maintain the staggered layout
            Array.from(images).forEach((img, index) => {
                img.style.transform = `translateY(${20 - 5 * index}px) translateX(${20 - 5 * index}px)`;
            });
        });
    });
});
