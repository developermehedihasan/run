

function convertImage() {
	// Get the input file
	var file = document.getElementById('file-upload').files[0];
	
	// Check if a file is selected
	if (!file) {
		alert('Please select an image.');
		return;
	}
	
	// Create a FileReader object to read the file
	var reader = new FileReader();
	
	// Set the onload function
	reader.onload = function() {
		// Create an Image object
		var img = new Image();
		
		// Set the onload function
		img.onload = function() {
			// Create a canvas element
			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');
			
			// Set the canvas dimensions
			canvas.width = img.width;
			canvas.height = img.height;
			
			// Draw the image on the canvas
			ctx.drawImage(img, 0, 0);
			
			// Convert the canvas to WebP
			canvas.toBlob(function(blob) {
				var url = URL.createObjectURL(blob);
				var link = document.createElement('a');
				link.href = url;
				link.download = file.name + '.webp';
				link.textContent = 'Download';
				document.getElementById('output').innerHTML = link.outerHTML;
				document.getElementById('output').style.display = 'block';
			}, 'image/webp', 0.8);
		};
		
		// Set the source of the Image object
		img.src = reader.result;
	};
	
	// Read the file as a data URL
	reader.readAsDataURL(file);
}



