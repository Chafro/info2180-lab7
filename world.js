window.onload = function() {

	document.getElementById("lookup").onclick =function(){list()};
	function list(){
		var str = document.getElementById("country").value;
		var xhttp = new XMLHttpRequest();
		var url = "world.php";
 		xhttp.onreadystatechange = function() {
    		if (xhttp.readyState === xhttp.DONE) {
 				if (xhttp.status === 200) {
 					var response = xhttp.responseText;
 					document.getElementById("results").innerHTML=response;
 				} else {
 					alert('There was a problem with the request. \n'+xhttp.status);
 				}
			} 
  		};
  		xhttp.open("GET", url+"?q="+str,true);
  		xhttp.send();
	}

}