window.onload = function(){includeHTML()}

function getPathToPagesFolder(){
    return window.location.href
}

var navbarHTML = "<div><a href=\""+getPathToPagesFolder()+"\">Hello World</a></div>"
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        console.log(elmnt.localName)
        if (elmnt.localName == "navigation"){
            if (elmnt.innerHTML == "")
            {
                elmnt.innerHTML = navbarHTML
            }            
        }
    }
}