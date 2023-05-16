

function hide_elem(hoverDIV, hiddenDIV)
{
    document.getElementById(hoverDIV).addEventListener('mouseover', function() {
        document.getElementById(hiddenDIV).style.visibility = 'visible';
        document.getElementById(hiddenDIV).style.opacity = '1';
    });
    
    document.getElementById(hoverDIV).addEventListener('mouseout', function() {
        document.getElementById(hiddenDIV).style.visibility = 'hidden';
        document.getElementById(hiddenDIV).style.opacity = '0';
    });
}




function showHiddenContent(hoverDIV, hiddenDIV) {
    document.getElementById(hoverDIV).addEventListener('mouseover', function() {
        document.getElementById(hiddenDIV).style.display = 'block';
    });

    document.getElementById(hoverDIV).addEventListener('mouseout', function() {
        document.getElementById(hiddenDIV).style.visibility = 'none';
    });
}

hide_elem('hover-job', 'hidden-job');
hide_elem('hover-pers', 'hidden-pers');

// showHiddenContent('hover-job', 'hidden-job');
// showHiddenContent('hover-pers', 'hidden-pers');