$('#btnCollapse').click(function () {
    if (($('#collapseExample')).hasClass('show') == false) {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(свернуть) <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>';
    } else {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(развернуть) <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>';
    }
});

var colors = ['#FF0000','#FFA500','#FFFF00','#008000','#00FFFF','#1E90FF','#8000ff'];
var backgrounds = ['#00CC00','#1047A9','#7109AA','#A00000','#FF7400','#FF9C0C','#FFF100'];
var i = 0;
var j = 0;
/*
var setBackgrounds = function() {
    setInterval(window.document.getElementById('emailString').style.background = backgrounds[j], 1000);
    if (j >= backgrounds.length) {
        return j = 0;
    } else {
        return j++;
    }
};
setInterval(setBackgrounds, 1000); */

var setColors = setInterval(function() {
    setInterval((document.getElementById('emailString').style.color = colors[i]), 1000);
    if (i >= colors.length) {
        return i = 0;
    } else {
        return i++;
    }
}, 1000);
setTimeout(function(){
    clearInterval(setColors);
}, 58000);

var setBackgrounds = setInterval(function() {
    setInterval((document.getElementById('emailString').style.background = backgrounds[j]), 1000);
    if (j >= backgrounds.length) {
        return j = 0;
    } else {
        return j++;
    }
}, 1000);
setTimeout(function(){
    clearInterval(setBackgrounds);
}, 58000);