$('#btnCollapse').click(function () {
    if (($('#collapseExample')).hasClass('show') == false) {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(свернуть)';
    } else {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(развернуть)';
    }
});

var colors = ['#FF0000','#FFA500','#FFFF00','#008000','#00FFFF','#1E90FF','#8000ff'];
var backgrounds = ['#00CC00','#1047A9','#7109AA','#A00000','#FF7400','#FF9C0C','#FFF100'];
var i = 0;

var setColors = function() {
    setInterval(document.getElementById('emailString').style.color = colors[i], 1000);
    if (i >= colors.length) {
        return i = 0;
    } else {
        return i++;
    }
};
setInterval(setColors, 1000);

var setBackgrounds = function() {
    setInterval(document.getElementById('emailString').style.background = backgrounds[i], 1000);
    if (i >= backgrounds.length) {
        return i = 0;
    } else {
        return i++;
    }
};
setInterval(setBackgrounds, 1000);