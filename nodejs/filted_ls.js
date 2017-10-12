const FS = require('fs');
const PATH = require('path');

//Ham tra ve cac children file neu co
function safeReadDirSync (path) {
	let dirData = {};
	try {
		dirData = FS.readdirSync(path);
	} catch(ex) {
		if (ex.code == "EACCES")
			return null;
	}
	return dirData;
}

function directoryTree (path,fileExt) {
	const name = PATH.basename(path);
	const item = { path, name };
	let stats;
	try { stats = FS.statSync(path); } //Su dung de Check xem duong dan la cua file hay directory
	catch (e) { return null; }


	if (stats.isFile()) {
		
		const ext = PATH.extname(path).toLowerCase();

		item.size = stats.size;  // File size in bytes
		item.extension = ext;
		item.type = 'file';
		if(item.extension == fileExt){
			item.listFile = item.name;
		}
	}
	else if (stats.isDirectory()) {
		let dirData = safeReadDirSync(path);
		if (dirData === null) return null;
		
		item.children = dirData
			.map(child => directoryTree(PATH.join(path, child)))
			.filter(e => !!e);
		item.size = item.children.reduce((prev, cur) => prev + cur.size, 0);
		item.type = 'directory';
	} else {
		return null; // Or set item.size = 0 for devices, FIFO and sockets ?
	}
	return item;
}

let tree  = directoryTree('./a','.txt');
console.log(tree);
function writeDirectory(tree){
    tree.children.forEach(function(element) {
		if(element.listFile != undefined){
			console.log(element.listFile);
		}
        if(element.children){
            writeDirectory(element)
        }
    }, this);
}
writeDirectory(tree);