// const os = require('os');

//info about current user
// const user = os.userInfo();
// console.log (user);

//method return the systems uptime in sec

// console.log(`the system uptime is ${os.uptime}`);

// const currentOs = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem()
// }

// console.log(currentOs);

const path = require ('path');

// console.log(path.sep);

const filePath = path.join ('/content', 'subfolder', 'test.txt');
console.log (filePath);

//to check the file only in the file
const base = path.basename (filePath);
console.log (base);

//actual path

const absolute = path.resolve (__dirname, 'content', 'subfolder', 'test.txt');
console.log (absolute);

// ===========================================================
//read file
const {readFileSync, writeFileSync} = require ('fs');


const first = readFileSync ('./content/first.txt', 'utf-8');
const second = readFileSync ('./content/second.txt', 'utf-8');

console.log (first, second);

//write file

//if you wanna override another content, you can add flag
writeFileSync (
  './content/result-sync.txt',
  `here is the result: ${first},  ${second}`,
  {flag: 'a'}
);


//read file
const {readFileSync, writeFileSync, readFile} = require ('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})

//sync
const {readFileSync, writeFileSync, readFile, writeFile} = require ('fs');

readFile ('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log (err);
    return;
  }
  const first = result;

  readFile ('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log (err);
      return;
    }
    const second = result;

    writeFile (
      './content/result-sync.txt',
      `here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log (err);
          return;
        }

        console.log (result);
      }
    );
  });
});


const http = require ('http');

const server = http.createServer ((req, res) => {
  if (req.url === '/') {
    res.end ('Welcome to the homepage');
  } else if (req.url === '/about') {
    res.end ('Here is about page');
  } else {
    res.statusCode = 404;
    res.end (`
        <h1>Ops!</h1>
        <p>we can't find the page you are looking for</p>
        <a href="/">Back to home</a>
    `);
  }
});

server.listen (5000);
