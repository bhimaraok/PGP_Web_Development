
//----------  Header Part   ------------
window.onscroll = function () {
    if (window.pageYOffset >= 92) {
        document.getElementById('header-wrapper').style.backgroundColor = 'white';
        document.getElementById('header-wrapper').style.boxShadow = '0 0 5px 1px black';
        document.getElementById('left').style.color = '#9e9e9e';
        document.getElementById('top-input-search').style.color = '#3a3a3a';
        document.getElementById('top-logo').style.backgroundPosition = '0 -220px';
        document.getElementById('nav-links1').style.color = '#3a3a3a';
        document.getElementById('nav-links2').style.color = '#3a3a3a';
        
    }
    else {
        document.getElementById('header-wrapper').style.backgroundColor = 'transparent';
        document.getElementById('header-wrapper').style.boxShadow = 'none';
        document.getElementById('left').style.color = 'white';
        document.getElementById('top-input-search').style.color = 'white';
        document.getElementById('top-logo').style.backgroundPosition = '0 -186px';
        document.getElementById('nav-links1').style.color = 'white';
        document.getElementById('nav-links2').style.color = 'white';
    }
}


// -------   Left and Right Arrow Functions ----

function functionleft() {
    document.getElementById('exp_slider').style.marginLeft = '0%';
}
function functionright() {
    document.getElementById('exp_slider').style.marginLeft = '-180%';
}
function rajastanLeft() {
    document.getElementById('raj_slider').style.marginLeft = '0%';
}
function rajastanRight() {
    document.getElementById('raj_slider').style.marginLeft = '-180%';
}



