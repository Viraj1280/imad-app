var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();

var articleOne = {
    title : "Article One | Viraj ",
    heading : "Article One" ,
    date : "Sep 5 , 2018",
    content : `<p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>`
};

var articleTwo = {
    title : "Article Two | Viraj ",
    heading : "Article Two" ,
    date : "Sep 5 , 2018",
    content : `<p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>`
};

var articleThree = {
    title : "Article Three | Viraj ",
    heading : "Article Three" ,
    date : "Sep 5 , 2018",
    content : `<p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>
    
    <p>Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.Hey there this is a new try towards my course of modern application development.</p>`
};

function createTemplate(data) {

var title = data.title;    
var date = data.date;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `
<html>
  <head> <title>${title}</title> </head>
  <body>
    <div>
        ${date};
    </div>
    <div>
        ${heading};
    </div>
    <div>
        ${content};
    </div>
    
  </body>
</html>
`;

return htmlTemplate;
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
