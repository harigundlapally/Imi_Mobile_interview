// mylibrary.js
let myElement;

const POSITIONS = {
    TOP: 'top',
    LEFT: 'left',
    BOTTOM: 'bottom',
    RIGTH: 'right'
};

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
    getTooltipPosition: function(coords) {
        let windowHeight = window.innerHeight;
        let tooltipPos = POSITIONS.TOP;
        let elemTop = coords.top;
        let elemLeft = coords.left;
        let tooltipPosContainer = {
            width: 300,
            height: 150
        };
        // debugger;
        if(elemTop - tooltipPosContainer.height > 30) {
            tooltipPos = POSITIONS.TOP;
        } else if((elemTop + coords.height + tooltipPosContainer.height) < windowHeight) {
            tooltipPos = POSITIONS.BOTTOM;
        };
        return tooltipPos;
    },
    show : function(tooltip, pos) {
        let offsetTop = window.pageYOffset;
        let offsetLeft = window.pageXOffset;
        let spanCoords = tooltip.querySelector('span').getBoundingClientRect();
        tooltip.setAttribute('data-position', pos);
        // tooltip.querySelector('span').style.bottom = (targetElemCoords.height + 10) + 'px';
        // tooltip.querySelector('span').style.top = 'auto';
        switch (pos) {
            case 'top':
                
                break;
        
            default:
                break;
        }
    },
    setTooltipPosition: function() {
        let tooltipBtns = document.querySelectorAll('.tooltip-btn');
        for(var i = 0; i < tooltipBtns.length; i++) {
            let targetElemCoords = tooltipBtns[i].getBoundingClientRect();
            let tooltipPos = this.getTooltipPosition(targetElemCoords);
            this.show(tooltipBtns[i], tooltipPos);

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