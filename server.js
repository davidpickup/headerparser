var express = require('express');
var app = express();

app.get('', function (req, res) {
    var ip = req.ip;
    var xip = req.get('X-Forwarded-For').split(',')[0] || ip;
    var language = req.get('Accept-Language').split(',')[0];
    var software = req.get('User-Agent').match(/\([^\(\)\n\f]*\)/)[0];
  res.send({
      'ip':xip,
      'language':language,
      'software':software
  });
})

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 8080!');
});
