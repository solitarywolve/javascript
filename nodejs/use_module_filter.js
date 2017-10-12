const filterFile = require('./module_filter');

filterFile.fromDir('./a','.txt',(err,data) => {
    if(err) console.log(err)
    console.log('found : ' + data)
})