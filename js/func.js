//document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(свернуть)';

$('#btnCollapse').click(function () {
    if (($('#collapseExample')).hasClass('show') == false) {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(свернуть)';
    } else {
        document.getElementById('btnCollapse').innerHTML = 'Дополнительно...(развернуть)';
    }
});