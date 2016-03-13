//Events for all alert message boxes
var closebtns = document.getElementsByClassName('close');

for (var i in closebtns) {
	closebtns[i].onclick = function() {
		var alert = this.parentElement;
		alert.style.opacity = 0;
		setTimeout(function(){ 
			alert.style.display = 'none'; 
		}, 600);	
	}
}