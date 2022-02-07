
//----------  Header Part   ------------
window.onscroll = function () {
    if (window.pageYOffset >= 92) {
        document.getElementById('header-wrapper').style.backgroundColor = 'white';
        document.getElementById('header_container').style.borderBottom='none';
        document.getElementById('header-wrapper').style.boxShadow = '0 0 5px 1px black';
        document.getElementById('left').style.color = '#9e9e9e';
        document.getElementById('top-input-search').style.color = '#3a3a3a';
        document.getElementById('top-logo').style.backgroundPositionY = '100%';
        document.getElementById('nav-links1').style.color = '#3a3a3a';
        document.getElementById('nav-links2').style.color = '#3a3a3a';

    }
    else {
        document.getElementById('header-wrapper').style.backgroundColor = 'transparent';
        document.getElementById('header_container').style.borderBottom='0.5px solid #3a3a3a';
        document.getElementById('header-wrapper').style.boxShadow = 'none';
        document.getElementById('left').style.color = 'white';
        document.getElementById('top-input-search').style.color = 'white';
        document.getElementById('top-logo').style.backgroundPositionY ='83%';
        document.getElementById('nav-links1').style.color = 'white';
        document.getElementById('nav-links2').style.color = 'white';
    }
}


// -------   Left and Right Arrow Functions ----

let ml = -181;
let slideCount = 0;

document.getElementById('next').onclick = function () {

    ml = ml - 90.5;

    if (slideCount <= 1) {

        document.getElementById('carousel').style.marginLeft = ml + '%';
        document.getElementById('carousel').style.transition = '0.7s';

       if (slideCount === 1) {

            setTimeout(function () {
                document.getElementById('carousel').style.marginLeft = '-181%';
                document.getElementById('carousel').style.transition = '0s';
                slideCount=0;
                ml = -181;
            }, 700);
        }

            slideCount++;

    }

}


document.getElementById('prev').onclick=function(){

    ml = ml + 90.5;

    if (slideCount>=-1) {
        document.getElementById('carousel').style.marginLeft = ml + '%';
        document.getElementById('carousel').style.transition = '0.7s';

        if (slideCount === -1) {

            setTimeout(function () {
                document.getElementById('carousel').style.marginLeft = '-181%';
                document.getElementById('carousel').style.transition = '0s';
                slideCount=0;
                ml = -181;
            }, 700);
        }

            slideCount--;
    }


}



