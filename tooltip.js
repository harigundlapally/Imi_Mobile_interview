// mylibrary.js
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

            if((windowHeight - buttonCoords.height) > spanCoords.height) {
                if(buttonCoords.top > spanCoords.height) {
                    tooltipBtns[i].setAttribute('data-position', 'top');
                } else {
                    tooltipBtns[i].setAttribute('data-position', 'bottom');
                }
            } else {
                if(buttonCoords.left > spanCoords.width) {
                    tooltipBtns[i].setAttribute('data-position', 'left');
                } else {
                    tooltipBtns[i].setAttribute('data-position', 'right');
                }
            }

        }
    }
}


// pageload event
window.onload = function() {
    myLibrary.setTooltip('Tooltip 1', 'Tooltip 1 text goes here...');
    myLibrary.setTooltip('Tooltip 2', 'Tooltip 2 text goes here...');
    myLibrary.setTooltip('Tooltip 3', 'Tooltip 3 text goes here...');
    myLibrary.setTooltip('Tooltip 4', 'Tooltip 4 text goes here...');
    // call onload to set tooltip position 
    myLibrary.setTooltipPosition();
    
};

// call resize to set tooltip position
window.onresize = function() {
    myLibrary.setTooltipPosition();
};

// call onscroll to set tooltip position
window.onscroll = function() {
    myLibrary.setTooltipPosition();
};