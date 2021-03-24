function loadtitleplusworks() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("lauratitleplusworks").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "lauraworks.txt", true);
  xhttp.send();
}

function loadtitle() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("lauratitleplusworks").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "lauratitle.txt", true);
  xhttp.send();
}