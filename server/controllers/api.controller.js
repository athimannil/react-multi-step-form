import fs from 'fs';
import path from 'path';

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/../data.json'), 'utf8'));
exports.getContent = function (req, res) {
  var returnValue = data.questions;

  setTimeout(function () {
    res.json(returnValue);
  }, 500);
};
