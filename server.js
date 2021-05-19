const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
var bodyParser = require('body-parser');

const BUILDPATH = path.join(__dirname);

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', PORT);

app.use(express.static(BUILDPATH)); 
app.get('/', (req, res) => {
    res.sendFile('FinnikyWiki2/FinnikyWiki2_5.html', { root: BUILDPATH });
});
//respond to call to search
app.post('/search', function (req, res) {
    var return_to_client = [];
    var post_body = req.body;
    fs.readdir(BUILDPATH+'/FinnikyWiki2/Pages', (err, files) => {
        if (err){
            console.log(err);
        }else {
            files.forEach(file => {
                return_to_client.push(file);
            });
        }
        res.status(200);
        res.send(return_to_client);
        return_to_client = [];
    })
});

//edit confirm button pressed
app.post('/edit', function (req, res) {
    var post_body = req.body;

    var path = BUILDPATH+'/FinnikyWiki2/Pages/'+JSON.stringify(post_body).split('PAGE')[1].split('END')[0]+'.html';
    // Return the POST message
    fs.writeFile(path, JSON.stringify(post_body).split('END')[1].split('":""}')[0], function (err) {
        if (err) return console.log(err);
        console.log('Change received and parsed');
    });
});

//new page added confirm clicked
app.post('/new', function (req, res) {
    var post_body = req.body;

    var path = BUILDPATH+'/FinnikyWiki2/Pages/'+(JSON.stringify(post_body).split('PAGE')[1].split('END')[0]).toLowerCase()+'.html';
    var pathCont = BUILDPATH+'/FinnikyWiki2/Title/'+(JSON.stringify(post_body).split('PAGE')[1].split('END')[0]).toLowerCase()+'.html';
    var pathComm = BUILDPATH+'/FinnikyWiki2/Comments/'+(JSON.stringify(post_body).split('PAGE')[1].split('END')[0]).toLowerCase()+'.html';
    // Return the POST message
    fs.writeFile(pathCont, JSON.stringify(post_body).split('PAGE')[1].split('END')
[0], function (err) {
        if (err) return console.log(err);
        console.log('New Page Title Created');
    });

    fs.writeFile(pathComm, '', function (err) {
        if (err) return console.log(err);
        console.log('New Page Comments Created');
    });

    fs.writeFile(path, JSON.stringify(post_body).split('END')[1].split('":""}')
[0], function (err) {
        if (err) return console.log(err);
        console.log('New Page Content Appended');
    });
});

//add new comment button clicked
app.post('/comment', function (req, res) {
    var post_body = req.body;

    var path = BUILDPATH+'/FinnikyWiki2/Comments/'+JSON.stringify(post_body).split('PAGE')[1].split('END')[0]+'.html';
    var existing = fs.readFileSync(path).toString();

    // Return the POST message
    fs.writeFile(path, existing+'<br>'+JSON.stringify(post_body).split('END')[1].split('":""}')[0], function (err) {
        if (err) return console.log(err);
        console.log('Change received and parsed');
    });
});

//random page function
app.get('/random', function (req, res) {
    var return_pages = [];
    fs.readdir(BUILDPATH+'/FinnikyWiki2/Pages', (err, files) => {
        if (err){
            console.log(err);
        }else {
            files.forEach(file => {
                return_pages.push(file);
            });
        }
        res.status(200);
        res.send(return_pages);
        return_pages = [];
    })
});

//display list of all wiki pages when requested
app.get('/list-pages', function (req, res) {
    var return_pages = [];
    fs.readdir(BUILDPATH+'/FinnikyWiki2/Pages', (err, files) => {
        if (err){
            console.log(err);
        }else {
            files.forEach(file => {
                return_pages.push(file);
            });
        }
        res.status(200);
        res.send(return_pages);
        return_pages = [];
    })
});

const httpServer = http.createServer(app);

httpServer.listen(PORT);

console.info(`🚀 Client Running on: http://localhost:${PORT}`);
