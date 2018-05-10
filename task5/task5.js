(function() {
	var count =1;
	document.getElementById('button').addEventListener('click', function(){
		count++

		 if(count%2===0) {
		 	document.getElementById('box').style.backgroundColor = 'green'
		 	document.addEventListener('button').innerHTML = "Make red"
		 }

		 else{
		 	document.getElementById('box').style.backgroundColor = 'red'
		 	document.addEventListener('button').innerHTML = "Make green"
	}
})
})()	