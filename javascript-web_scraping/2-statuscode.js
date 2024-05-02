#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error("Usage: node script.js <URL>");
  process.exit(1);
}

const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) {
    console.error("Error making request:", err);
    process.exit(1);
  } else {
    console.log('code:', response.statusCode);
  }
});
