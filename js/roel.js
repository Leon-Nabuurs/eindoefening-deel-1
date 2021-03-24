/*! jQuery for the Fosca website v1.0 | (c) 2017 jQuery Leon, Inc.  */
function loadEDIC() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("EDIC-tooltip").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "fosca-edic.txt", true);
  xhttp.send();
  document.getElementById("EDIC-tooltip").style.display = "block";
  document.getElementById("EDIC-tooltip").style.width = "200px";
}

function loadEDICoff() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("EDIC-tooltip").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "empty.txt", true);
  xhttp.send();
  document.getElementById("EDIC-tooltip").style.display = "block";
}