// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function isDarkMode() {
    // Get the styles (properties and values) for the root
    var rs = getComputedStyle(r);
    if(rs.getPropertyValue('--darkmode') == 'false') {
        return false;
    } else {
        return true;
    }
}

dcolors = ['#3C486B','#F0F0F0','#F9D949','#F45050']
lcolors = ['#F0EB8D','#2D2727','#413543','#8F43EE']

function darkModeToggle() {
    if(isDarkMode()) {
        r.style.setProperty('--darkmode', 'false');
        r.style.setProperty('--color1', dcolors[0]);
        r.style.setProperty('--color2', dcolors[1]);
        r.style.setProperty('--color3', dcolors[2]);
        r.style.setProperty('--color4', dcolors[3]);
        r.style.setProperty('--fill', dcolors[2]);
    } else {
        r.style.setProperty('--darkmode', 'true');
        r.style.setProperty('--color1', lcolors[0]);
        r.style.setProperty('--color2', lcolors[1]);
        r.style.setProperty('--color3', lcolors[2]);
        r.style.setProperty('--color4', lcolors[3]);
        r.style.setProperty('--fill', lcolors[3]);
    }
}