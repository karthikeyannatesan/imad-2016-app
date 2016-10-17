console.log('Loaded!');

var myimg = document.getElementById('myimg');
var marginleft = 0;

function moveMarginLeft()
{
    if (marginleft <= 400) {
        marginleft = marginleft + 1;
        myimg.style.marginLeft = marginleft + 'px';
    }
    else {
        marginleft = 0;
        myimg.style.marginLeft = '0px';        
    }
}

myimg.onclick = function () {
        interval = setInterval(moveMarginLeft, 100);
};

var cntbutton = document.getElementById('counter');
var cntspan = document.getElementById('count');
var vist_counter = 0;

cntbutton.onclick = function () {
    vist_counter = vist_counter + 1;
    cntspan.innerHTML = vist_counter;
}