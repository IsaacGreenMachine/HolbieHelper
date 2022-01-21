#!/usr/bin/node
if (process.argv.length < 4){
    console.log("Usage: node intranetTest.js HolbertonEmail HolbertonPassword apiKey(found at: https://intranet.hbtn.io/dashboards/my_tools)")
}
else{
const request = require('request');
request.post({
    headers: {'content-type' : 'application/json'},
    url:     'https://intranet.hbtn.io/users/auth_token.json',
    form:    {email: process.argv[2], api_key: process.argv[4], password: process.argv[3], scope: "checker"}
  }, function(error, response, body){
    if (error) {
        console.log(error);
        return;
      }
    console.log(body);
  });
}
