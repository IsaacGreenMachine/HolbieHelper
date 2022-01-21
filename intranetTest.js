#!/usr/bin/node
if (process.argv.length < 5) {
  console.log('Usage: [0]node [1]intranetTest.js [2]HolbertonEmail [3]HolbertonPassword [4]apiKey(found at: https://intranet.hbtn.io/dashboards/my_tools) [5]projectID');
} else {
  const request = require('request');
  // gets auth token
  request.post({
    headers: { contentType: 'application/json' },
    url: 'https://intranet.hbtn.io/users/auth_token.json',
    form: { email: process.argv[2], api_key: process.argv[4], password: process.argv[3], scope: 'checker' }
  }, function (error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    const authToken = (JSON.parse(body).auth_token);
    console.log('Auth Token:', authToken);
    // gets html for project page based on auth token
    request.get({
      headers: { contentType: 'application/json' },
      url: 'https://intranet.hbtn.io/projects/' + process.argv[5],
      form: JSON.stringify({ token: authToken, auth_token: authToken, auth_token: authToken, token: authToken })
    }, function (error, response, body) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(body);
    });
  });
}
