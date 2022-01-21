#!/usr/bin/node
const request = require('request');
request('https://intranet.hbtn.io', function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(response)
  console.log(body)
});
