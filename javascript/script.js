//Toggling the menu
var x = document.getElementById("menu");
//var y = document.getElementById('hamburger').style.backgroundImage = "url('../images/icon-hamburger.svg')";

    function menuFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  
}

//Changing the Hamburger img
function function2(){
  /* if ( x.style.display === "none") {
          y = document.getElementById('hamburger').style.backgroundImage = "url('../images/icon-hamburger.svg')"; 
    }else {
        y = document.getElementById('hamburger').style.backgroundImage = "url('../images/icon-close.svg')"; 
    }*/
    if ( x.style.display === "none") {
        y = document.getElementById('hamburger').style.backgroundColor = "hsl(12, 88%, 59%)"; 
  }else {
      y = document.getElementById('hamburger').style.backgroundColor = "hsl(228, 39%, 23%)"; 
  }
    
}