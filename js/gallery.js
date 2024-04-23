import Masonry from 'masonry-layout';

import imagesloaded from "https://cdn.skypack.dev/imagesloaded@4";


// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
  