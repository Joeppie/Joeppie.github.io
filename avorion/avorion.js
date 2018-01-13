function drop_handler(ev) {
	console.log("Drop");
	ev.preventDefault();
	// If dropped items aren't files, reject them
	var dt = ev.dataTransfer;
	if (dt.items) {
	  // Use DataTransferItemList interface to access the file(s)
	  for (var i=0; i < dt.items.length; i++) {
		if (dt.items[i].kind == "file") {
		  var f = dt.items[i].getAsFile();
		  console.log("... file[" + i + "].name = " + f.name);
		}
	  }
	} else {
	  // Use DataTransfer interface to access the file(s)
	  for (var i=0; i < dt.files.length; i++) {
		console.log("... file[" + i + "].name = " + dt.files[i].name);
	  }  
	}
  }

  