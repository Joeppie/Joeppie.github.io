
function getAvorionXML(jsonString) {

	//Part of torus from voxelizer, to test.
 /* jsonString = `{
	"dimension": [
	  {
	   "width": "23",
	   "height": "6",
	   "depth": "23"
	  }
	],
	"voxels": [ 
	  { "id": "voxel_0", "x": "8", "y": "0", "z": "1" },
	  { "id": "voxel_1", "x": "9", "y": "0", "z": "1" },
	  { "id": "voxel_2", "x": "10", "y": "0", "z": "1" }
	  	]
   }`
   */
   
   
let parsed = JSON.parse(jsonString);

//console.log(parsed);

let rootName =  'auto_' + Math.floor(Math.random() * 9223372036854775807);
let doc = [];

doc.push(`<?xml version="1.0"?><${rootName} accumulateHealth="true" convex="false">\n`);
let blocksize = 0.5;

currentIndex = -1; //Root block of ship will be -1.

for(voxel of parsed.voxels)
{
	let lx = blocksize*voxel.x;
	let ux = lx+blocksize;

	let ly = blocksize*voxel.y;
	let uy = ly+blocksize;

	let lz = blocksize*voxel.z;
	let uz = lz+blocksize;

	let material = 0; //iron
	let block = 1; //hull;

	let look = 0; //rotation up?
	let up = 3; //rotation sideways?

	doc.push(`\t<item parent="${currentIndex}" index="${++currentIndex}"><block index="${block}" material="${material}" look="${look}" up="${up}" color="ffa3afbf" lx="${lx}" ux="${ux}" ly="${ly}" uy="${uy}" lz="${lz}" uz="${uz}"/></item>\n`);
	parentIndex = 0; //The root element is the element whose parent is -1, after root element, add all blocks to the parent.
}

 doc.push(`</${rootName}>`);


return doc.join(''); //Concatenate all entries in one fell swoop.

//Testing code that I used when debugging using nodejs.
/* var fs = require('fs');

fs.writeFile('voxelized.xml', doc, function (err) {
  if (err) throw err;
  console.log('Saved!');
}); */
}



