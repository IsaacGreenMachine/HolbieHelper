#!/usr/bin/node

//https://github.com/Danucas/finally_did_it/

//https://intranet.hbtn.io/users/me.json?auth_token=
//https://intranet.hbtn.io/projects/1177/users_done_by_task.json?task_id=10619

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
    //console.log('Auth Token:', authToken);
    // gets html for project page based on auth token
    request.get({
      headers: { contentType: 'application/json' },
      url: 'https://intranet.hbtn.io/projects/' + process.argv[5] +'.json',
      form: { auth_token: authToken}
    }, function (error, response, body) {
      if (error) {
        console.log(error);
        return;
      }
      let tasksList = JSON.parse(body).tasks
      console.log(JSON.parse(body).id, JSON.parse(body).name)
      //console.log(tasksList);
      for (let i = 0; i < tasksList.length; i++) {
      console.log(tasksList[i].id, tasksList[i].title);

      /*request.get({
        headers: { contentType: 'application/json', Authorization: "Bearer "+authToken},
        url: 'https://intranet.hbtn.io/projects/1177/users_done_by_task.json', //?task_id=10619', //&auth_token=' + authToken,
        //form: {auth_token: authToken} //email: process.argv[2], api_key: process.argv[4], password: process.argv[3], scope: 'checker'}//auth_token: authToken, token: authToken}
      }, function (error, response, body) {
        if (error) {
          console.log(error);
          return;
        }
        //console.log(error)
        console.log(body)
        //console.log(response)
      });*/




    }
      request.get({
        headers: { contentType: 'application/json' },
        url: 'https://intranet.hbtn.io/users/me.json',
        form: {auth_token: authToken, token: authToken}
      }, function (error, response, body) {
        if (error) {
          console.log(error);
          return;
        }
        //console.log(JSON.parse(body))
      });


    });
  });
}

// https://intranet.hbtn.io/projects/1177/users_done_by_task.json?task_id=10622
