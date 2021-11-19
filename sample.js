function ajax() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var response = JSON.parse(this.responseText);

          var Jgrocery = response.grocery
          var output = ''
          for (i = 0; i < Jgrocery.length; i++) {

              output += "<tr><td>" + Jgrocery[i].id + "</td>" + "<td>" + Jgrocery[i].name + "</td>" + "<td>" + Jgrocery[i].quantity + "</td>" + "<td>" + Jgrocery[i].unit + "</td>"+"<td>"+ Jgrocery[i].department+"</td>"+"<td>"+Jgrocery[i].notes+"</td></tr>"
          }
          document.getElementById("tbody").innerHTML = output
      }
  };
  xhttp.open("GET", "data.json", true);
  xhttp.send();

}
