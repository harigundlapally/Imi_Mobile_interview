// mylibrary.js
let myElement;
var myLibrary = {
    setTooltip: function(text, hoverText) {
        let wrapper = document.getElementsByClassName('tooltips-wrapper')[0];
        let tooltipElem = document.createElement("div")
            tooltipElem.classList.add('tooltip');
            wrapper.appendChild(tooltipElem);
        let textElem = document.createElement("button");
            textElem.classList.add('button', 'tooltip-btn');
            textElem.setAttribute('type', 'button');
            textElem.innerHTML = text;
        let hoverElem = document.createElement("span");
            hoverElem.innerHTML = hoverText;
            hoverElem.style.visibility = 'hidden';
            tooltipElem.appendChild(textElem).appendChild(hoverElem);
    }, 
    setTooltipPosition: function() {
        let tooltipBtns = document.querySelectorAll('.tooltip-btn');
        for(var i = 0; i < tooltipBtns.length; i++) {
            let buttonCoords = tooltipBtns[i].getBoundingClientRect();
            let spanCoords = tooltipBtns[i].querySelector('span').getBoundingClientRect();
            let windowHeight = window.innerHeight;

            if((windowHeight) > spanCoords.height) {
                if(buttonCoords.top > spanCoords.height) {
                    tooltipBtns[i].setAttribute('data-position', 'top');
                    tooltipBtns[i].querySelector('span').style.bottom = (buttonCoords.height + 10) + 'px';
                    tooltipBtns[i].querySelector('span').style.top = 'auto';
                } else {
                    tooltipBtns[i].setAttribute('data-position', 'bottom');
                    tooltipBtns[i].querySelector('span').style.top = (buttonCoords.height + 10) + 'px';
                    tooltipBtns[i].querySelector('span').style.bottom = 'auto';
                }
            } else {
                if(buttonCoords.left > spanCoords.width) {
                    tooltipBtns[i].setAttribute('data-position', 'left');
                    tooltipBtns[i].querySelector('span').style.right = (buttonCoords.width + 10) + 'px';
                    tooltipBtns[i].querySelector('span').style.left = 'auto';
                } else {
                    tooltipBtns[i].setAttribute('data-position', 'right');
                    tooltipBtns[i].querySelector('span').style.left = (buttonCoords.width + 10) + 'px';
                    tooltipBtns[i].querySelector('span').style.right = 'auto';
                }
            }

        }
    },
    inViewport: function(element) {
        // Get the elements position relative to the viewport
        var bb = element.getBoundingClientRect();
        // Check if the element is outside the viewport
        // Then invert the returned value because you want to know the opposite
        return !(bb.top > innerHeight || bb.bottom < 0);
    }
};

// pageload event
window.onload = function() {
    myLibrary.setTooltip('Tooltip 1', 'Tooltip 1 text goes here...');
    myLibrary.setTooltip('Tooltip 2', 'Tooltip 2 text goes here...Tooltip 2 text goes here...Tooltip 2 text goes here...Tooltip 2 text goes here...Tooltip 2 text goes here...Tooltip 2 text goes here...');
    myLibrary.setTooltip('Tooltip 3', 'Tooltip 3 text goes here...');
    myLibrary.setTooltip('Tooltip 4', 'Tooltip 4 text goes here...');
    // check the elements in viewport
    myElement = document.querySelector( '.tooltip-btn' );
    if( myLibrary.inViewport(myElement) ){
        myLibrary.setTooltipPosition();
    };
    
};

// call resize to set tooltip position
window.onresize = function() {
    if( myLibrary.inViewport(myElement) ){
        myLibrary.setTooltipPosition();
    };
};

// call onscroll to set tooltip position
window.onscroll = function() {
    if( myLibrary.inViewport(myElement) ){
        myLibrary.setTooltipPosition();
    };
};