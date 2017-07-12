var express = require('express');

var app = express();

app.use(express.static('./'));

// app.listen(3000);
app.listen(process.env.PORT || 5000);
console.log('Listening on port 5000...');