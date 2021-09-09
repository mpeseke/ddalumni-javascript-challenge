const https = require('https');
const axios = require('axios');

let response;
const getData = async (url) => {
    const config = {
        method: 'get',
        url: url,
    }

    await axios(config).then((res) => {
        response = res.data;
    });

    console.log(response);

    return await response;
}

console.log(getData('https://loripsum.net/api'));
