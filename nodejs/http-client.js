const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts/1',(res) => {
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            console.log(rawData);
          } catch (e) {
            console.error(e.message);
          }
        });
    }).on('error',e => {
        console.log(e);
    });