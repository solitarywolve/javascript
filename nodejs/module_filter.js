const path = require('path');
const fs = require('fs');

function fromDir(startPath,filter,callback){
    if(!fs.existsSync(startPath)){
        let err = "Dir isn't true";
        callback(err,undefined);
    }

    let files = fs.readdirSync(startPath);
    for(let i=0 ;i < files.length; i++){
        let filename = path.join(startPath,files[i])
        let stat = fs.lstatSync(filename);
        if(stat.isDirectory()){
            fromDir(filename,filter,callback);
        }else if(filename.indexOf(filter)>=0){
            callback(undefined,filename)
        }
    }
}
module.exports.fromDir = fromDir;