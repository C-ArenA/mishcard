let mish_photo = document.getElementById("mish_photo");

setTimeout(()=>{
	mish_photo.classList.remove('animate__jackInTheBox');
	mish_photo.classList.add('animate__pulse', 'animate__infinite');
}, 1000)