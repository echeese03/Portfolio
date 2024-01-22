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

dcolors = ['60,72,107','240,240,240','249,217,73','244,80,80']
lcolors = ['240,235,141','45,39,39','65,53,67','143,67,238']

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