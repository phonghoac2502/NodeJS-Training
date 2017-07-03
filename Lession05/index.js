const fs = require('fs');
fs.readFile('data.txt', function(err, data){
if (err) {
  console.log(err);
  } else {
  console.log(data.toString()); }
});

function onComplete(err, data){
if(err){
  console.log(err);
  } else {
  console.log(data.toString());
  }
}
fs.readFile('data.txt', onComplete);

