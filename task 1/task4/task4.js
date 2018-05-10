var myBox = document.getElementById('box')
var myButton1 = document.getElementById('button1')
var myButton2 = document.getElementById('button2')

button1.addEventListener('click', function() {
	myBox.style.backgroundColor = 'red'
})

button2.addEventListener('click', function() {
	myBox.style.backgroundColor = 'green'
})

