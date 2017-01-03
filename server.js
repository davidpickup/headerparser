var express = require('express');
var app = express();

app.get('', function (req, res) {
    var ip = req.ip;
    var language = req.get('Accept-Language').split(',')[0];
    var software = req.get('User-Agent');
  res.send({
      'ip':ip,
      'language':language,
      'software':software
  });
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 8080!');
});
