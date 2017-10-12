//Su dung callback
const https = require('https');
function readurlCB(url,rawData,cb){
    https.get(url,(res) => {
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
            try {
                cb(rawData);
            } catch (e) {
                console.error(e.message);
            }
            });
        }).on('error',e => {
            console.log(e);
    });
}
// readurlCB('https://jsonplaceholder.typicode.com/posts/2','',(data) => {
//     readurlCB('https://jsonplaceholder.typicode.com/posts/1',data,(data2) =>{
//         readurlCB('https://jsonplaceholder.typicode.com/posts/3',data2,(data3) => console.log(data3))
//     })
// })
//Su dung Promise
function readurlPromise(url,rawData){
    return new Promise((resolve,reject)=>{
        https.get(url,(res) => {
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
            try {
                resolve(rawData);
            } catch (e) {
                console.error(e.message);
            }
            });
        }).on('error',e => {
            console.log(e);
            reject(e)
    });
    })
}
readurlPromise('https://jsonplaceholder.typicode.com/posts/2','')
.then(success => readurlPromise('https://jsonplaceholder.typicode.com/posts/1',success),err => console.log(err))
.then(success => readurlPromise('https://jsonplaceholder.typicode.com/posts/3',success),err => console.log(err))
.then(success => console.log(success),err => console.log(err))
.catch(e => console.log(e))