// Get the root element
var r = document.querySelector(':root');
var contents = ['TML','spider','equalizer','vacuum','cable','cubesat'];
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

lcolors = ['60,72,107','240,240,240','249,217,73','244,80,80']
dcolors = ['240,235,141','45,39,39','65,53,67','143,67,238']

function darkModeToggle() {
    if(isDarkMode()) {
        r.style.setProperty('--darkmode', 'false');
        r.style.setProperty('--color1', lcolors[0]);
        r.style.setProperty('--color2', lcolors[1]);
        r.style.setProperty('--color3', lcolors[2]);
        r.style.setProperty('--color4', lcolors[3]);
        r.style.setProperty('--fill', lcolors[3]);
        document.getElementById("darkModeIcon").setAttribute('class', 'bi bi-sun-fill');
    } else {
        r.style.setProperty('--darkmode', 'true');
        r.style.setProperty('--color1', dcolors[0]);
        r.style.setProperty('--color2', dcolors[1]);
        r.style.setProperty('--color3', dcolors[2]);
        r.style.setProperty('--color4', dcolors[3]);
        r.style.setProperty('--fill', dcolors[3]);
        document.getElementById("darkModeIcon").setAttribute('class', 'bi bi-moon-fill');
    }

    if(document.getElementById('details').style.getPropertyValue('visibility') == 'visible') {
        if(isDarkMode()) {
            bg.style.setProperty('filter', 'brightness(0.5)');
        } else {
            bg.style.setProperty('filter', 'brightness(1.5)');
        }
    }
}

function openContent(id) {
    grid = document.getElementById("projects");
    grid.style.setProperty('visibility', 'hidden');
    grid.style.setProperty('opacity', '0');
    grid.style.setProperty('height', '0');
    headshot = document.getElementById('headshot')
    headshot.style.setProperty('visibility', 'hidden');
    headshot.style.setProperty('opacity', '0');
    headshot.style.setProperty('height', '0');

    bg = document.getElementById('bg');
    if(isDarkMode()) {
        bg.style.setProperty('filter', 'brightness(0.5)');
    } else {
        bg.style.setProperty('filter', 'brightness(1.5)');
    }

    details = document.getElementById('details')
    details.style.setProperty('visibility', 'visible');
    details.style.setProperty('opacity', '100');
    details.style.setProperty('height', 'auto');
    content = document.getElementById(id);
    content.style.setProperty('visibility', 'visible');
    content.style.setProperty('opacity', '100');
    content.style.setProperty('height', 'auto');
    
    window.scrollTo(0, 0);
}

function closeContent() {
    details = document.getElementById('details')
    details.style.setProperty('visibility', 'hidden');
    details.style.setProperty('opacity', '0');
    details.style.setProperty('height', '0');
    for (id in contents) {
        content = document.getElementById(contents[id]);
        if (content.style != "") {
            content.style.setProperty('visibility', 'hidden');
            content.style.setProperty('opacity', '0');
            content.style.setProperty('height', '0');
        }
            
    }

    bg = document.getElementById('bg');
    bg.style.setProperty('filter', 'brightness(1)');

    grid = document.getElementById("projects");
    grid.style.setProperty('visibility', 'visible');
    grid.style.setProperty('opacity', '100');
    grid.style.setProperty('height', 'auto');
    headshot = document.getElementById('headshot')
    headshot.style.setProperty('visibility', 'visible');
    headshot.style.setProperty('opacity', '100');
    headshot.style.setProperty('height', 'auto');

    window.scrollTo(0, 0);
}