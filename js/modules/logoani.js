    const colorBlocks = document.querySelector('.color-blocks');
    const blocks = document.querySelectorAll('.color-blocks > div');
  
    const animationDuration = 500; // milliseconds
  
    blocks.forEach((block, index) => {
      block.addEventListener('animationend', function () {
        // Remove the color block from the DOM after the animation ends
        this.remove();
  
        // If all blocks have been removed, remove the color-blocks container
        if (document.querySelectorAll('.color-blocks > div').length === 0) {
          colorBlocks.remove();
        }
      });
    });