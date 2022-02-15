#!/usr/bin/env node

console.log("TOPWARDS ASSESSMENT- NODE CLI");
// this below gathers all the words from the txt file
const fs = require('fs');
const readline = require('readline');

async function Topwards() {
  const fileStream = fs.createReadStream('words.txt');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const word of rl) {
    console.log(`Line from file: ${word.split("").reverse().join("")}`);
    console.log(`Count: ${word.split("").reverse().join("").split("").length - 1}`);
   
  }
}

Topwards();

