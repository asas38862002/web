var fs = require('fs');
var gen;

function run(generator) {
  gen = generator();
  gen.next();
}

function read(file) {
  fs.readFile(file, function(err, data) {
    if (!err) console.log('read %s success!', file);
    gen.next(data);
  });
}

function write(file, data) {
  fs.writeFile(file,  data, function(err) {
    if (!err) console.log('write %s success!', file);
    gen.next();
  });
}

run(function* () { 
  var text = yield read('yieldFile.txt');
  yield write('yieldFile1.txt', text);
});