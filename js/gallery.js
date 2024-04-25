// Import Masonry and imagesLoaded if using ES6 imports
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

// Initialize Masonry
window.onload = () => {
    const grid = document.querySelector('.grid');
    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-item',  // ensures the column width matches the grid item width
        gutter: 0,  // no space between the items
        percentPosition: true,  // item positions are set with percentages
        horizontalOrder: true

    });

    imagesLoaded(grid, function() {
        msnry.layout(); // Lay out Masonry again once all images have loaded
    });
}

// Layout Masonry after each image loads using imagesLoaded
//imagesLoaded(grid, function() {
   // msnry.layout();
//});

