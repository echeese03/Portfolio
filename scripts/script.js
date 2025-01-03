// Get the root element
var r = document.querySelector(':root');
var contents = ['TML','spider','equalizer','vacuum','cable','cubesat','Rover','RDKDC','engine','RSA',
'passacaglia','dvorak','schumann','saintsaens','suite3prelude','suite3sarabande'];
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
    for (temp_id in contents) {
        content = document.getElementById(contents[temp_id]);
        if (content.style != "") {
            content.style.setProperty('visibility', 'hidden');
            content.style.setProperty('opacity', '0');
            content.style.setProperty('height', '0');
            content.style.setProperty('width', '0');
        }
            
    }
    grid = document.getElementById("media");
    button = document.getElementById("backMed");
    if(window.getComputedStyle(document.getElementById('projects')).getPropertyValue("opacity") == '1') {
        grid = document.getElementById("projects");
        button = document.getElementById("backEng");
    }
    grid.style.setProperty('visibility', 'hidden');
    grid.style.setProperty('opacity', '0');
    grid.style.setProperty('height', '0');
    grid.style.setProperty('width', '0');
    headshot = document.getElementById('headshot')
    headshot.style.setProperty('visibility', 'hidden');
    headshot.style.setProperty('opacity', '0');
    headshot.style.setProperty('height', '0');
    headshot.style.setProperty('width', '0');

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
    details.style.setProperty('width', 'auto');
    button.style.setProperty('visibility', 'visible');
    button.style.setProperty('opacity', '100');
    button.style.setProperty('height', 'auto');
    button.style.setProperty('width', 'auto');
    
    content = document.getElementById(id);
    content.style.setProperty('visibility', 'visible');
    content.style.setProperty('opacity', '100');
    content.style.setProperty('height', 'auto');
    content.style.setProperty('width', 'auto');
    
    window.scrollTo(0, 0);
}

function closeContent() {
    button = document.getElementById("backEng");
    button.style.setProperty('visibility', 'hidden');
    button.style.setProperty('opacity', '0');
    button.style.setProperty('height', '0');
    button.style.setProperty('width', '0');
    details = document.getElementById('details')
    details.style.setProperty('visibility', 'hidden');
    details.style.setProperty('opacity', '0');
    details.style.setProperty('height', '0');
    details.style.setProperty('width', '0');
    for (id in contents) {
        content = document.getElementById(contents[id]);
        if (content.style != "") {
            content.style.setProperty('visibility', 'hidden');
            content.style.setProperty('opacity', '0');
            content.style.setProperty('height', '0');
            content.style.setProperty('width', '0');
        }
            
    }

    bg = document.getElementById('bg');
    bg.style.setProperty('filter', 'brightness(1)');

    grid = document.getElementById("projects");
    grid.style.setProperty('visibility', 'visible');
    grid.style.setProperty('opacity', '100');
    grid.style.setProperty('height', 'auto');
    grid.style.setProperty('width', 'auto');
    headshot = document.getElementById('headshot')
    headshot.style.setProperty('visibility', 'visible');
    headshot.style.setProperty('opacity', '100');
    headshot.style.setProperty('height', 'auto');
    headshot.style.setProperty('width', 'auto');

    window.scrollTo(0, 0);
}

function closeMedia() {
    button = document.getElementById("backMed");
    button.style.setProperty('visibility', 'hidden');
    button.style.setProperty('opacity', '0');
    button.style.setProperty('height', '0');
    button.style.setProperty('width', '0');
    details = document.getElementById('details')
    details.style.setProperty('visibility', 'hidden');
    details.style.setProperty('opacity', '0');
    details.style.setProperty('height', '0');
    details.style.setProperty('width', '0');
    for (id in contents) {
        content = document.getElementById(contents[id]);
        if (content.style != "") {
            content.style.setProperty('visibility', 'hidden');
            content.style.setProperty('opacity', '0');
            content.style.setProperty('height', '0');
            content.style.setProperty('width', '0');
        }
            
    }

    bg = document.getElementById('bg');
    bg.style.setProperty('filter', 'brightness(1)');

    grid = document.getElementById("media");
    grid.style.setProperty('visibility', 'visible');
    grid.style.setProperty('opacity', '100');
    grid.style.setProperty('height', 'auto');
    grid.style.setProperty('width', 'auto');
    headshot = document.getElementById('headshot')
    headshot.style.setProperty('visibility', 'visible');
    headshot.style.setProperty('opacity', '100');
    headshot.style.setProperty('height', 'auto');
    headshot.style.setProperty('width', 'auto');

    window.scrollTo(0, 0);
}

function bio() {
    const coin = document.getElementById('coin');
    coin.classList.toggle('flipped');
    // setTimeout(() => {
    //     if (coin.classList.contains('flipped')) {
    //         coin.querySelector('.back').textContent = Math.random() < 0.5 ? 'Heads' : 'Tails';
    //     }
    // }, 300);
}

function toMusic() {
    const projects = document.getElementById('projects');
    const media = document.getElementById('media');
    projects.style.setProperty('opacity', '0');
    projects.style.setProperty('height', '0');
    projects.style.setProperty('width', '0');
    projects.style.setProperty('visibility', 'hidden');
    media.style.setProperty('visibility', 'visible');
    media.style.setProperty('opacity', '100');
    media.style.setProperty('height', 'auto');
    media.style.setProperty('width', 'auto');
}

function toEng() {
    const projects = document.getElementById('projects');
    const media = document.getElementById('media');
    media.style.setProperty('opacity', '0');
    media.style.setProperty('height', '0');
    media.style.setProperty('width', '0');
    media.style.setProperty('visibility', 'hidden');
    projects.style.setProperty('visibility', 'visible');
    projects.style.setProperty('opacity', '100');
    projects.style.setProperty('height', 'auto');
    projects.style.setProperty('width', 'auto');
    
}